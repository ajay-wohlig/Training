const url = "http://localhost:3000/movie/getOneId/5d9d736963a1f027693e7fae";

const vm = new Vue({
        el: '#app',
        data: {
          results: ""
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
            console.log("bfhsfuhsfis"+response.data)
          })
        }
      });