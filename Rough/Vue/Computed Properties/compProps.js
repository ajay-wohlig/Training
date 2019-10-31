var app = new Vue({
    el: '#comp_props',
    data:{
        firstname: 'name',
        lastname: 'surname',

    },
    methods:{
    },
    computed:{
        fullName:{
            get(){
                return this.firstname+" "+this.lastname
            }
            // ,
            // set(){

            // }
        }
    }
})