document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("input").addEventListener("input", function(event) {
      const inputText = event.target.value.toLowerCase().replace(/[^a-z\s]/g, ''); // Remove special characters and convert to lowercase
      event.target.value = inputText; // Update input value
  });
});

function encryptText() {
  const inputText = document.getElementById('input').value;
  let encryptedText = '';

  for (let i = 0; i < inputText.length; i++) {
      switch (inputText[i]) {
          case 'e':
              encryptedText += 'enter';
              break;
          case 'i':
              encryptedText += 'imes';
              break;
          case 'a':
              encryptedText += 'ai';
              break;
          case 'o':
              encryptedText += 'ober';
              break;
          case 'u':
              encryptedText += 'ufat';
              break;
          default:
              encryptedText += inputText[i];
      }
  }

  document.getElementById('output').value = encryptedText;
}

function removeBackgroundImage() {
  document.getElementById('output').classList.remove("background-image");
}

function decryptText() {
  const encryptedText = document.getElementById('output').value;
  let decryptedText = '';

  // Reverse of encryption process
  decryptedText = encryptedText.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');

  document.getElementById('output').value = decryptedText;
}

function copyEncryptedText() {
  const outputText = document.getElementById('output');
  outputText.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
}
