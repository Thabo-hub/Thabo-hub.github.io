
const form = document.getElementById("form_id");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username && surname && password) {
    // Create a user variable - does this need to be herer???
    const user = {
      id: 1,
      name: username.value,
      surname: surname.value,
      password: password.value,
    };
    // Test
    console.log(user);
    // check if user exists:
    if (
      localStorage.getItem(user.name) === username &&
      localStorage.getItem(user.surname) === surname
    ) {
      alert("Welcome back");
    } else {
      alert("Please register");
    }
  }
})
