document.getElementById("formLogin").addEventListener("submit", function(event) {
  event.preventDefault(); 


  let usuarioCorrecto = "ruth.diaz";
  let passwordCorrecta = "JS2026RD07";


  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;
  let mensaje = document.getElementById("mensaje");  


  if (usuario === "" || password === "") {
    document.getElementById("errores").innerText = "Debes completar todos los campos";


  } else if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        mensaje.textContent = "Acceso Permitido. Redirigiendo en 3 segundos";
        mensaje.style.color = "green";

    
        setTimeout(function () {
            window.location.href = "formulario.html";
        }, 3000);

     
        localStorage.setItem("usuario", usuario);

    
        window.location.href = "formulario.html";
  }
});
