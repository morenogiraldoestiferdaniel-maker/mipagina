function mostrarNombre() {

    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultado").textContent =
        "Hola " + nombre + ", bienvenido.";

}