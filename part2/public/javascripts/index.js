// LOGIN EVENT LISTENER
document.getElementById('login-form').addEventListener('submit', function(event) {
    console.log("Submitting login form");
    // Ignore default submit method
    event.preventDefault();
    // Get form data
    const form = new FormData(event.target);
    const username = form.get('username');
    const password = form.get('password');
    // Call login function
    login(username, password);
});