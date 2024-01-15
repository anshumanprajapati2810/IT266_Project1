function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        // Successful login, you can redirect or perform other actions here
        alert('Login successful!');
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
        // Prevent form submission
        event.preventDefault();
    }
}
