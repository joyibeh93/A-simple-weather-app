let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let named = document.querySelector('.named');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+'&appid=e7ac5db1afc40d248972898a4bbd11e2&units=metric')
    .then(response => response.json())
    .then(data => {
        let namedValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        
        named.innerHTML = namedValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue
            })
        
   
.catch(err => alert('Wrong City'))
});
function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let month = months[date.getMonth()];

    let year =date.getFullYear();
  
    return `${day} ${month} , ${year} ${hours}:${minutes}`;
  }

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);




