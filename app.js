const weather = new Weather();
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        
        ui.render(results);
    })
    .catch(err => console.log(err)); 

}
document.getElementById('set-location').addEventListener('submit', function(e){
    const newLocation = document.getElementById('locationCity').value;

    weather.changeWheatherData(newLocation);
    getWeather();
});