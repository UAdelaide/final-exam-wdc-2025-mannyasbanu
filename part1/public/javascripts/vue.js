const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const dogImgUrl = ref('');
    let buttons = [];

    function randomisePos(){
      buttons.forEach(button => {
        if(!button) return;
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        button.style.position = 'fixed';
        button.style.left = x;
        button.style.top = y + ;
      });
    }

    onMounted(() => {
      // Fetch dog image
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

      // Get buttons and randomise
      buttons = [
        document.getElementById('about-button'),
        document.getElementById('nav-button'),
        document.getElementById('settings-button')
      ];
      randomisePos(buttons);
      window.addEventListener('scroll', () => randomisePos(buttons));
      console.log("attempted");
    });

    return { dogImgUrl };
  }
}).mount('#app');
