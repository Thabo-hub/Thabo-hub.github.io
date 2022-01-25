alert("Hellow Guys!");
// variable
var username = document.getElementById("name");
var surname = document.getElementById("surname");
var password = document.getElementById("password");

const userLogin = () => {
  // Create a user variable - does this need to be herer???
  const user = {
    id: 1,
    name: username,
    surname: surname,
    password: password,
  };

  // check if user exists:
  if (
    localStorage.getItem(user.name) === username &&
    localStorage.getItem(user.surname) === surname
  ) {
    alert("Welcome back");
  } else {
    alert("Please register");
  }
};

const signUp = () => {
  // Create a user variable
  const user = {
    id: 1,
    name: document.getElementById("name"),
    surname: document.getElementById("surname"),
    password: document.getElementById("password"),
  };
  //   Check if uer exists:
  if (
    localStorage.getItem(user.name) === username &&
    localStorage.getItem(user.surname) === surname
  ) {
    alert("User already exists");
  } else {
    // Creating a user if form validation is successful
    if (typeof Storage !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      alert("we seem to have a problem");
    }
  }
};
