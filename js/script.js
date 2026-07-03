const API = "https://localhost:7114/api/Usuarios";

const formulario = document.getElementById("formUsuario");
const tabla = document.getElementById("tablaUsuarios");


window.onload = function () {

    if (!sessionStorage.getItem("usuario")) {
        window.location.href = "index.html";
        return;
    }

    cargarUsuarios();
};

// GET
async function cargarUsuarios() {
    const res = await fetch(API);
    const data = await res.json();

    tabla.innerHTML = "";

    data.forEach(u => {
        tabla.innerHTML += `
        <tr>
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarUsuario(${u.id})">
                    Editar

                </button>

                <button class="btn btn-danger btn-sm" onclick="eliminarUsuario(${u.id})">
                    Eliminar

                </button>

            </td>
        </tr>`;
    });

}

// POST / PUT
formulario.addEventListener("submit", async function (e) {

    e.preventDefault();

    const id = document.getElementById("id").value;

    const usuario = {
        

        nombre: document.getElementById("nombre").value,

        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value
    };

    if (id === "") {

        await fetch(API, {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)

        });

    } else {

        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...usuario })
        });

    }

    formulario.reset();

    document.getElementById("id").value = "";

    cargarUsuarios();

});

// EDIT
async function editarUsuario(id) {
    const res = await fetch(`${API}/${id}`);
    const u = await res.json();

    document.getElementById("id").value = u.id;
    document.getElementById("nombre").value = u.nombre;
    document.getElementById("correo").value = u.correo;
    document.getElementById("contrasena").value = u.contrasena;
}

// DELETE
async function eliminarUsuario(id) {
    if (!confirm("¿Eliminar usuario?")) return;

    await fetch(`${API}/${id}`, {
        method: "DELETE"

    });


    cargarUsuarios();

}

// LOGOUT
function cerrarSesion() {

    sessionStorage.removeItem("usuario");

    window.location.href = "index.html";

}