document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from restcountries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayCountries(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  // Display data on the webpage
  function displayCountries(countries) {
    const container = document.getElementById("country");
    countries.forEach((country) => {
      const card = document.createElement("div");
      card.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
      card.innerHTML = `
                <div class="card shadow-sm">
                    <div class="aspect">
                        <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common} Flag">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <p class="card-text">Population: ${country.population}</p>
                        <p class="card-text">Region: ${country.region}</p>
                    </div>
                </div>
            `;
      container.appendChild(card);
    });
  }
});
