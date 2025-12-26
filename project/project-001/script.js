const button = document.getElementById("btn-greet");
const display = document.getElementById("message");

button.addEventListener("click", function () {
  display.textContent =
    "Selamat, Anda baru saja mengatifkan javascript pertama anda.";
  display.style.color = "007dff";
  display, (style.fontWeidth = "bold");
});
