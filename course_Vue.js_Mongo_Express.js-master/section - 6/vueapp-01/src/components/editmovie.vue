<template>
<div>
<h3>Edit a Movie</h3>
<label>Name:</label>
  <input type='text' :placeholder= 'movie.title' v-model='movie.title'><br>
   <label>Director Name:</label>
  <input type='text' :placeholder= 'movie.director' v-model='movie.director'><br>
   <label>Language:</label>
  <input type='text' :placeholder= 'movie.language' v-model='movie.language'><br>
  <router-link to="/"><button v-on:click='updateMovie(movie)'>Edit</button></router-link>
</div>
</template>

<script>
/* eslint-disable */
import  axios  from "axios"
import  Vue  from "vue"
export default{
        name : 'EditMovie',
        data() {
            return{
                id: 0,
                movie: ""
            }
        },
        created(){
            this.id = this.$route.params.id
            axios.get("http://localhost:3000/movie/getOneId/"+this.id).then((response) => {
                this.movie = response.data
            })
        },
        methods:{
            updateMovie(movie){
                axios.put("http://localhost:3000/movie/"+this.id, this.movie).then((response) => {
                    console.log(response)
                })
                alert("Movie Updated")
            }
        }
}
</script>