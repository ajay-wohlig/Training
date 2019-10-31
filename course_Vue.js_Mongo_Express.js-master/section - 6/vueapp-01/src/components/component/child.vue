<template>
    <div>
        <modal name="Delete-Movie" @before-open= "beforeOpen">
         Are you sure you want to delete the movie?
        <br>
         <button v-on:click="deleteMovie(message)">Yes</button>
         <button v-on:click="hide">No</button>
  </modal>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {

    name: 'ChildComponent',
    data(){
        return{

        }
    },
    props:{
        message:String
    },

    methods:{
        deleteMovie(id){
            this.$emit
    //     axios.delete("http://localhost:3000/movie/"+id).then((response) => {
    //     window.location.reload()
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    },
    show(id){
    this.$modal.show('Delete-Movie', {id: id});
    },

    hide(){
    this.$modal.hide('Delete-Movie');
    },

    beforeOpen (event) {
      console.log("Event ",event.params.id)
      this.idtodel = event.params.id
  }
    }
    // props: ["message"]
}
</script>