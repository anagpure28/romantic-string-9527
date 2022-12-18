function LoginData(){
    let User = document.getElementById("user").value;
    let Pass = document.getElementById("pass").value;

    let userData = JSON.parse(localStorage.getItem("user-username")) || [];
    let passwordData = JSON.parse(localStorage.getItem("user-password")) || [];

    // console.log(User);
    // console.log(Pass);
    
    if(User == userData){
        if(Pass == passwordData){
            alert("Login Successfully");
        }else {
            alert("Invalid Password");
        }
    }else{
        alert("Invalid Credentials");
    }
}

// let form =  document.getElementById("signform");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let User = document.getElementById('user').value;
//     let Pass =  document.getElementById('pass').value;

//     localStorage.setItem("user-list", JSON.stringify(User));
//     localStorage.setItem("pass-list", JSON.stringify(Pass));


//     let userData = JSON.parse(localStorage.getItem("user-list")) || [];
//     let passData = JSON.parse(localStorage.getItem("pass-list")) || [];

//     let a = "aniket",b="ani123";

//     if(userData === a && passData === b){
//         alert("Login success");
//     }else{
//         alert("Login failed");
//     }

// })
