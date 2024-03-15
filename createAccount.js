document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
 // Get username and password from the form
 const usernameInput = document.getElementById('newUsername').value;
 const passwordInput = document.getElementById('newPassword').value;

 if (usernameInput && passwordInput ) {
    // Set logged-in state in localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', usernameInput);

    //aleart popup with new users info 
alert(`New Username is ${usernameInput}. New Password is ${passwordInput}.`);

   
 // Clear the form fields
 usernameInput.value = '';
 passwordInput.value = '';

 //locate user to home page
window.location.href = 'index.html';
} else {
    alert('Please enter both username and password.');
}
});

  