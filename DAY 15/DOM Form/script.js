document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // To Collect form data:
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  // To Collect food choices:
  const foodChoices = [];
  if (document.getElementById("food1").checked)
    foodChoices.push(document.getElementById("food1").value);
  if (document.getElementById("food2").checked)
    foodChoices.push(document.getElementById("food2").value);
  if (document.getElementById("food3").checked)
    foodChoices.push(document.getElementById("food3").value);
  if (document.getElementById("food4").checked)
    foodChoices.push(document.getElementById("food4").value);
  if (document.getElementById("food5").checked)
    foodChoices.push(document.getElementById("food5").value);

  // To Ensure at least two food choices are selected:
  if (foodChoices.length < 2) {
    alert("Please select at least two food choices.");
    return;
  }

  // To Create a new row in the table:
  const table = document.getElementById("dataTable");
  const row = table.insertRow();
  row.insertCell(0).innerText = firstName;
  row.insertCell(1).innerText = lastName;
  row.insertCell(2).innerText = email;
  row.insertCell(3).innerText = address;
  row.insertCell(4).innerText = pincode;
  row.insertCell(5).innerText = gender;
  row.insertCell(6).innerText = foodChoices.join(", ");
  row.insertCell(7).innerText = state;
  row.insertCell(8).innerText = country;

  // To Clear the form:
  document.getElementById("form").reset();
});
