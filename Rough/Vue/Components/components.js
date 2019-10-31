import axios from "axios";
//  const axios = require('axios')

var vm = new Vue({

    data: {
        datas:"gsdgsdg"
    },
    created(){
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.datas = response.data.bpi))
        console.log("dfafasdfadf")
    }
})


// import axios from "axios";

// var adminUrl = "http://localhost:3000/";

// export default {
//   getOneId: callback => {
//     return axios
//       .post(adminUrl + "movie/getOneId/5d9d736963a1f027693e7fae", {})
//       .then(data => {
//         callback(null, data);
//       })
//       .catch(err => {
//         callback(err);
//       });
//   }
// }


