document.addEventListener("DOMContentLoaded", () => {
  const countriesContainer = document.getElementById("countries-container");
  const apiKey = "e008a6f69d326b64bdb93cfc1640040c";

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        // CREATING CARD FOR EACH COUNTRY USING BOOTSTRAP
        const countryCard = document.createElement("div");
        countryCard.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

        // CREATING CARD ELEMENT
        const card = document.createElement("div");
        card.className = "card h-100";

        // CREATING CARD HEADER
        const cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        cardHeader.textContent = country.name.common;

        // CREATING CARD IMG
        const cardImg = document.createElement("img");
        cardImg.className = "card-img-top";
        cardImg.src =
          country.flags && country.flags.svg ? country.flags.svg : "";
        cardImg.alt = country.name.common;

        // CREATING CARD BODY
        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-center";

        // CREATING CARD TEXT
        const cardText = document.createElement("p");
        cardText.className = "card-text";

        const capital = country.capital ? country.capital[0] : "N/A";
        const region = country.region;
        const countryCode = country.cca3;
        const latlng = country.latlng ? country.latlng.join(", ") : "N/A";

        cardText.innerHTML = `
          <strong>Capital:</strong> ${capital}<br>
          <strong>Region:</strong> ${region}<br>
          <strong>Country Code:</strong> ${countryCode}<br>
          <strong>Lat&Lng:</strong> ${latlng}
        `;

        // CREATING WEATHER BUTTON
        const weatherButton = document.createElement("button");
        weatherButton.className = "btn btn-primary";
        weatherButton.textContent = "Click for Weather";
        weatherButton.onclick = () =>
          getWeather(country.name.common, country.latlng[0], country.latlng[1]);

        // Appending card text and button to card body
        cardBody.appendChild(cardText);
        cardBody.appendChild(weatherButton);

        // Appending card header, image, and body to card
        card.appendChild(cardHeader);
        card.appendChild(cardImg);
        card.appendChild(cardBody);

        // Appending card to country card container
        countryCard.appendChild(card);

        // Appending country card to countries container
        countriesContainer.appendChild(countryCard);
      });
    })
    .catch((error) => console.error("Error fetching country data:", error));

  window.getWeather = (countryName, lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        alert(
          `Country: ${countryName}\nWeather: ${
            data.weather[0].description
          }\nTemperature: ${data.main.temp.toFixed(2)}°C`
        );
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };
});
