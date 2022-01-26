
// for login form:
const form = document.getElementById("form_id");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const password = document.getElementById("password");

// A logged in user: use this for tests
const john = {
  name: "john",
  surname: "doe",
  password: "johndoe123",
};
localStorage.setItem("john", JSON.stringify(john));

// Handling Login
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username && surname && password) {
    // check if user exists:
    var checkUser = localStorage.getItem(username.value);
    var obj = (JSON.parse(checkUser));

    if (obj.name === username.value && obj.surname === surname.value && obj.password ===password.value) {
      alert("Welcome back");
    } else {
      alert("Please register");
    }
  }
});
