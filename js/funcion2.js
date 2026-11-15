function mostrarResultado() {

    let parametros =
        new URLSearchParams(window.location.search);
		
    let numero1 =
        parseFloat(parametros.get("numero1"));

    let numero2 =
        parseFloat(parametros.get("numero2"));

    let suma =
        numero1 + numero2;

    document.getElementById("resultado").innerHTML =
        "El resultado de la suma es: " + suma;

}

mostrarResultado();