document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("result");
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "C") {
        display.value = "";
      } else if (button.value === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else {
        display.value += button.value;
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (
      (e.key >= "0" && e.key <= "9") ||
      e.key === "." ||
      e.key === "/" ||
      e.key === "*" ||
      e.key === "-" ||
      e.key === "+"
    ) {
      display.value += e.key;
    } else if (e.key === "Enter") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (e.key === "Escape") {
      display.value = "";
    } else {
      alert("Only numbers are allowed");
    }
  });
});
