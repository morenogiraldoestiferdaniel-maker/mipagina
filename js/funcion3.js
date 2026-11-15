function mostrarDatos() {

    let parametros = new URLSearchParams(window.location.search);
    let tabla = document.getElementById("tablaDatos");
    let campos = {};

    parametros.forEach(function (valor, nombre) {
        if (nombre === "Clave") {
            valor = "********";
        }
        campos[nombre] = campos[nombre] ? campos[nombre] + ", " + valor : valor;
    });

    for (let nombre in campos) {
        let fila = tabla.insertRow();
        fila.insertCell().textContent = nombre;
        fila.insertCell().textContent = campos[nombre];
    }
}
mostrarDatos();