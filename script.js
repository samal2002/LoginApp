document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }
  if (username === "admin" && password === "1234") {
    alert("Login Successful! Welcome " + username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Username or Password!");
  }
});