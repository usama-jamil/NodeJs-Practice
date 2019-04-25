console.log('client  side java script')

// fetch(`http://localhost:3000/city?cityName=${}`).then(res =>{
//      res.json().then(data => console.log(data))
// })

const cityTodayForm = document.querySelector('form')
const search = document.querySelector('input')

const cityName  = document.getElementById('cityName')
const place = document.getElementById('place')
const longitude = document.getElementById('longitude')
const latitude = document.getElementById('latitude')

const headline = document.getElementById('headline')
const minTemperature = document.getElementById('minTemperature')
const maxTemperature =document.getElementById('maxTemperature')
const day = document.getElementById('day')
const night = document.getElementById('night')

const news = document.getElementById('news')

cityTodayForm.addEventListener('submit', e =>{
     e.preventDefault()
     
     fetch(`http://localhost:3000/city?cityName=${search.value}`).then(res =>{
          res.json().then(data => {

               cityName.innerText = data.name
               place.innerText = data.location
               longitude.innerText = data.longitude
               latitude.innerText = data.latitude

               headline.innerText =data.headline
               minTemperature.innerText  = data.minTemperature
               maxTemperature.innerText = data.maxTemperature
               day.innerText =data.day
               night.innerText = data.night

               news.innerHTML = data.miniArticles && data.miniArticles.map(article =>(
                   `<h4>${article.title}</h4>
                    <p>${article.description}</p>
                    <strong>${article.author}</strong><br/>
                    <a>${article.source}</a>`
               ))
          })
     })
     
     // console.log('testing button')
})