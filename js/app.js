//
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const sForm = document.querySelector("form");
const time = document.querySelector("img.time");
const icon = document.querySelector("div.icon img");

sForm.addEventListener("submit", e => {
    e.preventDefault();
    // console.log(sForm.cityname.value);
    getWeather(sForm.cityname.value)
        .then((data) => {
            updateHTML(data);
            // console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });    

    sForm.reset();
});

const updateHTML = data => {
    let timeSrc = data.current.is_day ? "img/day.jpg" : "img/night.jpg";
    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', data.current.condition.icon);
    details.innerHTML = `
        <h5 class="card-title city_name text-info-emphasis text-uppercase">
        ${data.location.name}
        </h5>
        <p class="card-text weather_text">${data.current.condition.text}</p>
        <p class="display-4">
        ${data.current.temp_c} &deg; C
        </p>     
    `;
    if(card.classList.contains('d-none')){card.classList.remove('d-none')}
}
