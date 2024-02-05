function toggleForms() {
    var loginForm = document.querySelector('.login-form');
    var signupForm = document.querySelector('.signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function attemptLogin() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
    // Simulate a server-side check
    if (username === "ssinha" && password === "Test@123") {
      // Redirect to the home page or perform other actions
      //alert("Login Successful");
      window.location.href = "file:///E:/Simplilearn/projects/02-Client%20Management%20Application/sms.html";
      return false;
    } else {
      alert("Incorrect username or password. Please try again.");
      return false;
    }
  }


  function togglePassword() {
    var passwordField = document.getElementById("login-password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }