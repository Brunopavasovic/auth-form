const userName = document.getElementById("username");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const errorUsername = document.getElementById("error-user");
const errorPassword = document.getElementById("error-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userName.value === "" || userName.value === null) {
    errorUsername.style.visibility = "visible";
  }

  if (pass.value === "" || pass.value === null) {
    errorPassword.style.visibility = "visible";
  } else {
    alert("login succesful");
  }

});