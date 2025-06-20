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
        
        dogImgUrl =
      }
    }

  },
  methods: {
  }
});