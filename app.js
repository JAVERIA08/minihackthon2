// login in form///////////////
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
   const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatpassword = document.getElementById("repeatpassword").value;
   
    console.log("firstname:", firstname);
    console.log("lastname:", lastname);
    console.log("Email:", email);
    console.log("password:", password);
   console.log("repeatPassword:", repeatpassword);
}) 
// sign-in form/////////////////////////////////
document.getElementById("signin-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    
    if (username === "your_username" && password === "your_password") {
      alert("Sign in successful!");
      
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  