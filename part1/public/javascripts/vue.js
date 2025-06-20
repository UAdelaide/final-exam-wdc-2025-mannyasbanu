const vueinst = new Vue({
  el: '#app',
  data: {
    dogImgUrl: ''
  },
  mounted(){
    // Fetch dog image of the day
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4 && xhttp.status == 200){
         const res = JSON.parse(xhttp.responseText);
         this.dogImgUrl = res.message;
      } else {
        console.log('failed to fetch dogImg');
      }
    };
    xhttp.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    xhttp.send();
  },
  methods: {
  }
});