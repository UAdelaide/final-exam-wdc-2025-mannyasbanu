const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const dogImgUrl = ref('');

    onMounted(() => {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          const res = JSON.parse(xhttp.responseText);
          dogImgUrl.value = res.message;
        } else if (xhttp.readyState === 4) {
          console.log('failed to fetch dogImg');
        }
      };
      xhttp.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
      xhttp.send();
    });

    return { dogImgUrl };
  }
}).mount('#app');
