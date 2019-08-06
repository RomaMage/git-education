class UI {
    constructor() {
        this.icon = document.getElementById('w-icon');
        this.temp = document.getElementById('w-temp');
        this.feelslike = document.getElementById('w-feelslike');
        this.pressure = document.getElementById('w-pressure');
        this.visibility = document.getElementById('w-visibility');
        this.windDegree = document.getElementById('w-wind-degree');
        this.windSpeed = document.getElementById('w-wind-speed');
        
        this.locationCity = document.getElementById('current-location');
        this.locationTime = document.getElementById('current-date');
    }

    render(weather) {
        this.locationCity.textContent = weather.location.name;
        this.locationTime.textContent = weather.location.localtime;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.temp.textContent = `Temperature: ${weather.current.temp_c} C`;
        this.feelslike.textContent = `Temperature feelslike: ${weather.current.feelslike_c} C`;
        this.pressure.textContent = `Pressure: ${weather.current.pressure_mb} mb`;
        this.visibility.textContent = `Visibility: ${weather.current.vis_km} km`;
        this.windDegree.textContent = `Wind Degree: ${weather.current.wind_degree}`;
        this.windSpeed.textContent = `Wind Speed: ${weather.current.wind_kph} `;
    }
}