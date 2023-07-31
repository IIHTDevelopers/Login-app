document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace the below condition with your actual encryption logic (this is a simple example)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'welcome.html?username=' + encodeURIComponent(username);
    } else {
        displayErrorMessage('Invalid username or password.');
    }
});

function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = message;
}
