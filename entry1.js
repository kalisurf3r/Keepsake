
// Retrieve the transferred text from local storage
const transferredText = localStorage.getItem('copiedText');
// Set the value of the target textarea to the transferred text
if (transferredText) {
  document.getElementById('entryText1').textContent = transferredText;
}


