function submitform(){
  
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  localStorage.setItem("user-username", JSON.stringify(user));
  localStorage.setItem("user-password", JSON.stringify(pass));

}

// let form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
  
//   let obj={
//     username : form.username.value,
//     password : form.password.value
//   };

//   let userData = JSON.parse(localStorage.getItem("username")) || [];
//   userData.push(obj);
//   localStorage.setItem("username", JSON.stringify(userData));
// })

