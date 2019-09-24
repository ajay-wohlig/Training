const request = require('request')

const url = 'https://api.darksky.net/forecast/c58f4b508e27b45560cb244946a4337b/37.8267,-122.4233'

request({url: url, json: true},(error,response) =>{
    if(error){
        console.log('Unable to connect to the internet')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        console.log(response.body.daily.summary+'The termperature is '+response.body.currently.temperature+' degree and '+response.body.currently.precipProbability+"% chances of rain")
    }
})

const url_1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ambernath.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYWpheTQyNTgiLCJhIjoiY2sweG1mZnNoMDZzODNucHJ1c3htYmtxbiJ9.iIt7YkuhuEtv4UFbnNwlLA&limit=1'

request({url: url_1, json: true},(error,response) =>{
    if(error){
        console.log('Not connected to internet')
    }else if(response.body.features.length == 0){
        console.log('Unable to find location')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log('Longitude: '+longitude+' Latitude: '+latitude)
    }
})
