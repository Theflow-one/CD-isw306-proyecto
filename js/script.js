const formulario = document.querySelector("form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    mensaje.classList.remove("error", "exito");

    if (nombre === "") {
        mensaje.innerHTML = "El nombre no puede estar vacío";
        mensaje.classList.add("error");
        return;
    }

    if (nombre.length < 3) {
        mensaje.innerHTML = "El nombre debe tener al menos 3 caracteres";
        mensaje.classList.add("error");
        return;
    }

    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        mensaje.innerHTML = "Ingrese un correo electrónico válido";
        mensaje.classList.add("error");
        return;
    }

    const usuario = {
        nombre: nombre,
        correo: correo
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.innerHTML = "Datos registrados correctamente";
    mensaje.classList.add("exito");

    formulario.reset();
});