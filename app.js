function encryptText() {
  var inputText = document.getElementById("inputText").value.toLowerCase(); // Convertir a minúsculas
  var outputText = "";

  // Validación para caracteres especiales y mayúsculas
  if (/[^a-z\s]/.test(inputText)) {
      alert("¡No se permiten caracteres especiales ni mayúsculas!");
      return;
  }

  // Encriptar texto
  outputText = inputText.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");

  document.getElementById("output").value = outputText;
}

// Función para desencriptar texto
function decryptText(text) {
  return text.replace(/enter/g, "e")
             .replace(/imes/g, "i")
             .replace(/ai/g, "a")
             .replace(/ober/g, "o")
             .replace(/ufat/g, "u");
}

// Función para copiar texto encriptado al portapapeles
function copyEncryptedText() {
  var inputText = document.getElementById("input").value;
  var encryptedText = encryptText(inputText);
  
  if (encryptedText !== null) {
      navigator.clipboard.writeText(encryptedText)
          .then(() => {
              console.log('Texto encriptado copiado al portapapeles');
              alert('Texto encriptado copiado al portapapeles');
          })
          .catch(err => {
              console.error('Error al copiar el texto encriptado: ', err);
              alert('Error al copiar el texto encriptado');
          });
  }
}

