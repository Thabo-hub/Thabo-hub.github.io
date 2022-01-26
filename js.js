// Conditional Form Rendering
const showLogin = document.getElementById("login-container");
const showRegister = document.getElementById("register-container");

function goToRegister() {
  // Hides the login form and displays the register form
  showLogin.style.display = "none";
  // For Thabo: I have added a setTimeout fso that the user will be able to tell that a new form has been loaded
  setTimeout(() => {
    showRegister.style.display = "block";
  }, 1000);
}

function goToLogin() {
  showRegister.style.display = "none";
  setTimeout(() => {
    showLogin.style.display = "block";
  });
}

// Variables for handling Form Submits
const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const password = document.getElementById("password");

// I have set up a user in local storage for testing purposes
const john = {
  name: "john",
  surname: "doe",
  password: "johndoe123",
};
localStorage.setItem("john", JSON.stringify(john));

// Handling Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username && surname && password) {
    // check if user exists:
    var checkUser = localStorage.getItem(username.value);
    var obj = JSON.parse(checkUser);
    if (obj) {
      if (
        obj.name === username.value &&
        obj.surname === surname.value &&
        obj.password === password.value
      ) {
        alert("Welcome back");
      }
    } else {
      alert("Please register");
    }
  }
});

// Handling Registration
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username && surname && password) {
    // check if user exists:
    var checkUser = localStorage.getItem(username.value);
    var obj = JSON.parse(checkUser);
    if (obj) {
      if (
        obj.name === username.value &&
        obj.surname === surname.value &&
        obj.password === password.value
      ) {
        alert("Please return to Login");
      }
    } else {
      // Create a user variable
      if (username.value && surname.value && password.value) {
        const user = {
          name: username.value,
          surname: surname.value,
          password: password.value,
        };
        console.log(user);
        //   Create new user
        localStorage.setItem("user", JSON.stringify(user));
        alert("user data saved");
      }
    }
  }
});
