console.log('client  side java script')

fetch('http://localhost:3000/city').then(res =>{
     res.json().then(data => console.log(data))
})