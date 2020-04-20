function dakMode() {
  let change = document.body;
  change.classList.toggle("darkMode");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("darkMode");
}

// dynamic copyright date
let currentDate = new Date();
let year = currentDate.getFullYear();
document.getElementById("copyright").innerHTML = `Copyright  ${year}.`;
