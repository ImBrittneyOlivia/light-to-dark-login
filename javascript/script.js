// function dakMode() {
//   let change = document.body;
//   change.classList.toggle("darkMode");
// }

function myFunction() {
  let buttonTxt = document.getElementById("toggleBtnTxt");

  var element = document.body;
  element.classList.toggle("darkMode");

  if (buttonTxt.innerHTML === "Light Mode") {
    buttonTxt.innerHTML = "Dark Mode";
  } else {
    buttonTxt.innerHTML = "Light Mode";
  }
}

// dynamic copyright date
let currentDate = new Date();
let year = currentDate.getFullYear();
document.getElementById("copyright").innerHTML = `Copyright  ${year}.`;
