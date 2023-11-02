function loading() {
      document.querySelector('.ove').style.display = 'none';
    }

    // Simular tiempo de carga
    setTimeout(function() {
      // Llamar a la función para cerrar la animación
      loading();
    }, 3000); // Cambia el tiempo de espera a tu preferencia (en milisegundos)
    



// Función para copiar el texto al portapapeles
function copyText() {
  var outputText = document.getElementById('output2').value; // Obtener el texto del área de texto
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
  showAlert("Texto copiado al portapapeles!");
}

function showAlert(message) {
  alert(message);
}
// Obtener la dirección IP del usuario
const userIPElement = document.getElementById("userIP");

fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
        userIPElement.textContent = data.ip;
    })
    .catch(error => {
        console.error("Error al obtener la dirección IP:", error);
    });
// Obtener elementos del DOM
const profileImage = document.getElementById("profileImage");
const imageInput = document.getElementById("imageInput");

// Verificar si hay una imagen en el almacenamiento local y cargarla
const storedImage = localStorage.getItem("profileImage");
if (storedImage) {
    profileImage.src = storedImage;
    imageInput.style.display = "none";
}

// Manejar cambios en la imagen de perfil
imageInput.addEventListener("change", event => {
    const selectedImage = event.target.files[0];
    
    if (selectedImage) {
        const imageURL = URL.createObjectURL(selectedImage);
        profileImage.src = imageURL;
        
        // Guardar la imagen en el almacenamiento local
        localStorage.setItem("profileImage", imageURL);
        
        // Ocultar el botón de selección de imagen
        imageInput.style.display = "none";
    }
});
