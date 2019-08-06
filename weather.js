class Weather {
    constructor() {
        this.apiKey = '774536d4332b48b3be4124844190608';
        this.city = 'Kharkiv';
        this.days = '10';
    }

    async getWeather() {
        const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    changeWheatherData(city) {
        this.city = city;
    }
}