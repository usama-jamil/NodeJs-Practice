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

const dataDisplay = document.getElementById('data')
const loading = document.getElementById('loading')

cityTodayForm.addEventListener('submit', e =>{
     e.preventDefault()
     
     loading.style.display ='block'
     dataDisplay.style.display = 'none'     

     fetch(`http://localhost:3000/city?cityName=${search.value}`).then(res =>{

          res.json().then(data => {
               
               cityName.innerText = data.name
               place.innerText = data.ip ? data.ip : data.location
               longitude.innerText = data.longitude
               latitude.innerText = data.latitude

               headline.innerText =data.Headline
               minTemperature.innerText  = data.MinTemperature
               maxTemperature.innerText = data.MaxTemperature
               day.innerText =data.Day
               night.innerText = data.Night

               news.innerHTML = data.miniArticles ? data.miniArticles.map(article =>(
                   `<h4 style="color:#408E66;">${article.title}</h4>
                    <p style="color:#373737;">${article.description}</p>
                    <strong style="color:#8FB5FE;">${article.author}</strong><br/>
                    <a>${article.source}</a>`
               )) : ''
                    if(data.err && data.err !== "There is no News for that country...!"){
                         loading.style.color='#ef3034'
                         loading.innerText = data.err
                    }else{
                         loading.style.display ='none'
                         dataDisplay.style.display = 'block'     
                    }

          })
     })
     
     // console.log('testing button')
})