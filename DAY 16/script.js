document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");

  function countdown(message, callback) {
    setTimeout(function () {
      countdownElement.innerHTML = message;
      callback();
    }, 1000);
  }

  countdown("10", function () {
    countdown("9", function () {
      countdown("8", function () {
        countdown("7", function () {
          countdown("6", function () {
            countdown("5", function () {
              countdown("4", function () {
                countdown("3", function () {
                  countdown("2", function () {
                    countdown("1", function () {
                      countdown("Happy Independence Day!!", function () {});
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

