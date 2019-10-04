const https = require('https')

    const url = 'https://api.darksky.net/forecast/c58f4b508e27b45560cb244946a4337b/40,-75'

    https.request(url,(response)=>{
            response.on('data',(chunk)=>{

            })
            response.end('end',()=>{

            })
    })
   