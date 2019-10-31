var app2 = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        message2: "You loaded this page on "+ new Date().toLocaleString(),
        seen: true,
        todos: [
            {task: "Task1"},
            {task: "Task2"},
            {task: "Task3"}
        ],
        message4: "Something"
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message3: "Hello Vue.js1",
        
},
methods: {
    reverseMsg: function () {
        this.message3 = this.message3.split('').reverse().join('')
      }
}
})

var _obj = {
    name: "ajay",
    surname: "yadav"
}

var app = new Vue({
    el: '#vuedet',
    data: {
       a: 5
    },
    methods: {
       aSquare: function (){
         this.a=this.a*this.a
       }
    }
    //    firstname: "Ajay",
    //    lastname: "Yadav"
    // methods:{
    //     mydetails: function () {
    //        return "My name is "+this.firstname+' '+this.lastname;
    //     }
    //  }
 })

//  console.log("1"+app.name)
//  console.log("2"+app.surname)
//  console.log("3"+app.$data)
//  console.log("4"+app.$data.name)

app.aSquare()
console.log(app.a)

 var Component = Vue.extend({
    data: function () {
       return _obj
    }
 })

 var myComponentInstance = new Component();
 console.log(myComponentInstance.name);

 Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
 })

 Vue.component('props-demo-advanced', {
    props: {
       // just type check
       height: Number,
       
       // type check plus other validations
       age: {
          type: Number,
          default: 0,
          required: true,
          validator: function (value) {
             return value >= 0
          }
       }
    }
 })

 var Comp = Vue.extend({
    props: ['msg'],
    template: '<div>{{ msg }}</div>'
 })
 
 var vm = new Comp({
    propsData: {
       msg: 'hello'
    }
 })

 var app = new Vue({
    el:'#htmlco',
    data:{
       name: 'User',
       age: 20,
       htmlContent: '<div><h1>Vue js Template</h1></div>',
       //assigning attribute to htmpl elements
       imgsrc: 'images/sample.jpg'
    }
 })





//  methods: {
//       reverseMessage(message) {
//         return message.split('').reverse().join('')
//       }
//     }