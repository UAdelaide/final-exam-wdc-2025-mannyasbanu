const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const dogImgUrl = ref('');
    let buttons = [];

    function randomiseButton(){
      buttons.forEach(button => {
        if(!button) return;
        const xpos = Math.random() * 1000;
        const ypos = Math.random() * 1000;
        const xsize = Math.random() * 500;
        const ysize = Math.random() * 500;
        button.style.position = 'fixed';
        button.style.left = xpos + 'px';
        button.style.top = ypos + 'px';
        button.style.width = xsize + 'px';
        button.style.height = ysize + 'px';
        button.style.fontSize = xsize/10 + 'px';
      });
    }

    function scrollToAbout() {
      const about = document.getElementById('about-section');
      about.scrollIntoView();
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
      randomiseButton(buttons);
      window.addEventListener('scroll', () => randomiseButton(buttons));
      console.log("attempted");
    });

    return { dogImgUrl, scrollToAbout };
  }
}).mount('#app');
