const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

const vm = new Vue({
    el: '#app',   
    //Mock data for the value of BTC in USD
    data: {
        results: []
      },
      mounted(){
          axios.get(url).then((response) => {
              this.results = response.data
          })
      }
    });