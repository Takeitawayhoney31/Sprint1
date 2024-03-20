
    function encrypt() {
    // Hide the placeholder image
    var placeholderImg = document.getElementById("placeholder-img");
    if (placeholderImg) {
        placeholderImg.style.display = "none";
    }
    var inputText = document.getElementById("input").value;
    if (/[^a-zA-Z\s]/.test(inputText)) {
      alert("¡No se permiten caracteres especiales!");
      return;
    }
    var outputText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("output").value = outputText;
    
  }

  function decrypt() {
    var inputText = document.getElementById("output").value;
    var outputText = inputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("output").value = outputText;
  }

  function copyText() {
    var outputTextarea = document.getElementById("output");
    outputTextarea.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
  }
