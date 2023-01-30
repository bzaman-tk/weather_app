// &q=cityname

const base = "https://api.weatherapi.com/v1/current.json?key=";
const key = "c6b96a3e662e4a4685520948233001";

const getWeather = async (city) => {
    const result = await fetch(`${base + key}&q=${city}`);
    const data = result.json();
    return data;
}

// getWeather("sylhet")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });