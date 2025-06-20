const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const dogImgUrl = ref('');
    const buttons = [];

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

    function randomisePos(){
      buttons.forEach(button => {
        if(!button) return;
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        
      })
    }

    return { dogImgUrl };
  }
}).mount('#app');
