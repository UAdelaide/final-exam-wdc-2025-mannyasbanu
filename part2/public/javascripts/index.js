// LOGIN FUNCTION
async function login(username, password){
    console.log("Sending login request");
    try{
        // Post login request
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            credentials: 'include'
        });
        // Parse response
        const data = await res.json();
        // Validate response
        if(!res.ok){
            throw new Error(data.error || 'Login failed');
        }
        // Reload page
        window.location.href = '/';
    } catch (error){
        console.error('Login error: ', error);
        alert('Login failed');
    }
}

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