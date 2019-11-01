<template>
  <div>

  <label>Name:</label>
  <input type='text' reqired=true placeholder='Movie name' v-model="movieData.title" required><br>
   <label>Director Name:</label>
  <input type='text' placeholder='Director Name' v-model="movieData.director" required><br>
   <label>Language:</label>
  <input type='text' placeholder='language' v-model="movieData.language" required><br>

  <!-- <router-link to="/"> -->
  <button v-on:click="addMovie">Add Movie</button>
  <!-- </router-link> -->

    <table>
  <tr>
    <th>Movie Name</th>
    <th>Director Name</th>
    <th>Language</th>
    <th>Actions</th>
  </tr>
  <tr v-for="(movie, idx) in movies" :key="idx">
    <td>{{movie.title}}</td>
    <td>{{movie.director}}</td>
    <td>{{movie.language}}</td>
    <td><button v-on:click="show(movie._id)">Delete</button>
    <router-link :to="{ name: 'EditMovie', params: {id: movie._id} }">
    <button>Edit</button>
    </router-link>
    </td>
  </tr>
</table>


<button v-on:click="toaster">Toast</button>

<modal :message="idtodel" v-on:messagefromchild="deleteMovie"></modal>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'
import VModal from 'vue-js-modal'
import modal from "./component/child";
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'


Vue.use(VModal)
Vue.use(Toasted, {
  duration: 5000
})
Vue.use(Vuelidate)

export default{
  name: 'Hello',
  data() {
    return{
          movies: "",
          movieData :{ title : '', director : '', language : '', id : ''},
          idtodel: ""
    }
    },
    validations: {
          movieData: {
            title:{
              required,
              minLength: minLength(4),
            },
            director:{
              required
            },
            language:{
              required,
              between: between(20, 30)
            }
          }    

    },

  created(){
      axios.get("http://localhost:3000/movie/").then((response) => {
      this.movies = response.data
      })
  } ,

  components: {
    modal
  },

  methods:{
    addMovie(){
      axios.post("http://localhost:3000/movie/", this.movieData).then((response) => {
        window.location.reload()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },

    deleteMovie(id){
        axios.delete("http://localhost:3000/movie/"+id).then((response) => {
        window.location.reload()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },

    toaster(){
      this.$toasted.show('hello billo')
    },

    show(id){
    this.idtodel = id
    this.$modal.show('Delete-Movie',);
    },
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>