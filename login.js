//login function. Have name appear
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Perform your authentication logic here (e.g., verify against a hardcoded list of users)
  if (username === 'admin' && password === 'admin') {
    // Set logged-in state in localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
    
    // Display username
    document.getElementById('usernameDisplay').textContent = 'Logged in as: ' + username;
    document.getElementById('usernameDisplay').style.display = 'block';
    
    //relocate user to home page
    window.location.href = 'index.html';

    // Clear the form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
 
} else {
    alert('Invalid username or password');
    document.getElementById('usernameDisplay').textContent = '';
    document.getElementById('usernameDisplay').style.display = 'none';
  }
});

// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('loggedIn') === 'true') {
    const username = localStorage.getItem('username');
    // Display username
    document.getElementById('usernameDisplay').textContent = 'Logged in as: ' + username;
    document.getElementById('usernameDisplay').style.display = 'block';
  }
});

//logout 
document.addEventListener('DOMContentLoaded', function() {
  const logout  = document.getElementById('logout');

  logout.addEventListener('click', function(event) { 
    event.preventDefault();

    if (localStorage.getItem('loggedIn') === 'true') {
      const username = localStorage.getItem('username');
      // Display sign out
      document.getElementById('usernameDisplay').textContent = 'Signed Out';
      document.getElementById('usernameDisplay').style.display = 'block';

      localStorage.setItem('loggedIn', 'false'); 
    }
  })
});
