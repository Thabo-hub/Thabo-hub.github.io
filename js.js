// for login form:
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
});

// for register form:
const registerForm = document.getElementById("");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Create a user variable
  const user = {
    name: username.value,
    surname: surname.value,
    password: password.value,
  };
  //   Check if user exists:
  if (
    localStorage.getItem(user.name) === username.value &&
    localStorage.getItem(user.surname) === surname.value
  ) {
    //   check if password is correct
    if(localStorage.getItem(user.password)=== password.value){
        alert("User already exists");

    }else {
        alert('incorrect password')
    }
    
  } else {
    // Creating a user if form validation is successful
    if (typeof Storage !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Success! User data saved");
    } else {
      alert("we seem to have a problem");
    }
  }
});
