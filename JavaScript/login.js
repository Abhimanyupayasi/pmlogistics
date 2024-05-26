// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting the traditional way

//     // Get values from input fields
//     var enteredId = document.getElementById('id').value;
//     var enteredPassword = document.getElementById('password').value;

//     // Check if entered ID and password match the specified values
//     if (enteredId === '123456654' && enteredPassword === '123456') {
//         // Redirect to the next page (replace 'next-page.html' with the actual URL)
//         window.location.href = 'next-page.html';
//     } else {
//         alert('Invalid ID or password. Please try again.'); // Show an error message
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".inp input");
  
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        const label = this.nextElementSibling;
        label.classList.toggle("up", this.value.trim() !== "");
      });
    });
  });
  
//   function focusinp(inp) {
//     if (inp == 'usr') {
//       document.getElementById("username").focus();
//     } else if (inp == 'pass') {
//       document.getElementById("password").focus();
//     } else {
//       document.getElementById("username").focus();
//     }
//   }



  document.getElementById("loginButton").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the provided username and password match the specified conditions
    if ((username === "punitmishra" && password === "punit@123") ||
        (username === "abhimanyupayasi" && password === "abhi@2004") ||
        (username === "vivekpayasi" && password === "vivek@2006") ||
        (username === "anuragpayasi" && password === "anurag@123") ||
        (username === "extrauser" && password === "pmlogistics@123") 
    ) {
        // Redirect to the next page if the conditions are met
        window.location.href = "../dashboard/?username=" + encodeURIComponent(username);
    } else {
        // Display an error message if the conditions are not met
        alert("Invalid username or password. Please try again.");
    }
});
