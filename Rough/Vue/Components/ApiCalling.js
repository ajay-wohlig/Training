export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
      this.posts = response.data
    })
    .catch((e) => {
      console.error(e)
    })
  }
}