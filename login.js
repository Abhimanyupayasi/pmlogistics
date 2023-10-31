document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get values from input fields
    var enteredId = document.getElementById('id').value;
    var enteredPassword = document.getElementById('password').value;

    // Check if entered ID and password match the specified values
    if (enteredId === '123456654' && enteredPassword === '123456') {
        // Redirect to the next page (replace 'next-page.html' with the actual URL)
        window.location.href = 'next-page.html';
    } else {
        alert('Invalid ID or password. Please try again.'); // Show an error message
    }
});
