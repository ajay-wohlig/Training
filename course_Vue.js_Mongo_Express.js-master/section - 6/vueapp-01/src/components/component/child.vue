<template>
    <div>
        <modal name="Delete-Movie">
         Are you sure you want to delete the movie?
        <br>
         <button v-on:click="sendmessagetoparent(message)">Yes</button>
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
            id: 0
        }
    }, 
    props:{
        message:String
    },
    methods:{
        sendmessagetoparent(message){
            this.id = message
            console.log(message)
            this.$emit('messagefromchild',this.id)
        },
        hide(){
            this.$modal.hide('Delete-Movie');
        },

    }
}
</script>