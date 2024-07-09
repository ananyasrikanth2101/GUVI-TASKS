// Fetch data from TheCatAPI
function fetchData(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Debugging: Inspect the data
      return data;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Display data on the webpage
function displayData(data) {
  if (!Array.isArray(data)) {
    console.error("Expected an array but got:", data);
    return;
  }
  const dataContainer = document.getElementById("api-data-3");
  data.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "col-md-4 mb-3";
    itemElement.innerHTML = `<div class="card shadow-sm aspect">
                                    <img src="${item.url}" class="card-img-top" alt="Cat Image">
                                  </div>`;
    dataContainer.appendChild(itemElement);
  });
}

// API URL
const apiUrl3 = "https://api.thecatapi.com/v1/images/search?limit=20";
fetchData(apiUrl3).then(displayData);
