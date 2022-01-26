// for register form:
const registerForm = document.querySelector("form");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const password = document.getElementById("password");



registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("hello register");

  // Create a user variable
  if (username.value && surname.value && password.value) {
    const user = {
      name: username.value,
      surname: surname.value,
      password: password.value,
    };
    console.log(user);
    //   Check if user exists
    if (
      localStorage.getItem(username.value) === username.value &&
      localStorage.getItem(surname.value) === surname.value
    ) {
      alert("User already exists");
    } else {
      //   Create new user
      localStorage.setItem("user", JSON.stringify(user));
      alert("user data saved");
      console.log(localStorage);
    }
  }
});

//   //   Check if user exists:
//   if (
//     localStorage.getItem(user.name) === username.value &&
//     localStorage.getItem(user.surname) === surname.value
//   ) {
//     alert("User already exists");
//   } else {
//     // Creating a user if form validation is successful
//     if (typeof Storage !== "undefined") {
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("user data saved");
//     } else {
//       alert("we seem to have a problem");
//     }
//   }

// });
