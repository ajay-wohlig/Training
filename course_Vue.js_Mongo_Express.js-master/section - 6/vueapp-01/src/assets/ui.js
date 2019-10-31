/* eslint-disable */

console.log('Reached++++++++++++++++++++++++++++++++++++++')

const formScript = document.querySelector('form')
const movieId = document.querySelector('input')

formScript.addEventListener('submit',(e) =>{
axios.get("http://localhost:3000/movie/getOneId/"+movieId.value).then((response) => {
console.log("response: "+response.data.revenue)
})
})