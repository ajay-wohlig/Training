var vm = new Vue({
  el: '#vue_app',
  data:{
    name:'Ajay',
    job:'Devloper',
    website:"www.thenetninja.co.uk",
    websiteTag:"<a href='www.thenetninja.co.uk'>The Net Ninja</a>",
    age:25
  },
  methods:{
    greet:function(time){
      return 'Good '+time
    },
    add(){
      this.age++
    },
    subtract(){
      this.age--
    }
  }
})
