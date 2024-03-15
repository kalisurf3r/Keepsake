
// Select the button element
const clear = document.getElementById('button-clear');

// Attach event listener to the button
clear.addEventListener('click', function() {
  // Execute code when button is clicked
    document.getElementById('textarea').value = '';
});



//copies text from textarea on home screen
function copyText() {
  const text = document.getElementById('textarea').value;
 //save text
 localStorage.setItem('copiedText', text);

}

