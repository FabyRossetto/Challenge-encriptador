var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-fondo");
var contenedor = document.querySelector(".contenedor-mensaje");
var resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");


       


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
   
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    var cajaTexto = document.querySelector(".caja1");
    return cajaTexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}




function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a": textoFinal = textoFinal + "ai";
                break;
            case "e": textoFinal = textoFinal + "enter";
                break;
            case "i": textoFinal = textoFinal + "imes";
                break;
            case "o": textoFinal = textoFinal + "ober";
                break;
            case "u": textoFinal = textoFinal + "ufat";
                break;
            default: textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a": textoFinal = textoFinal + "a";
                i = i + 1;
                break;
            case "e": textoFinal = textoFinal + "e";
                i = i + 4;
                break;
            case "i": textoFinal = textoFinal + "i";
                i = i + 3;
                break;
            case "o": textoFinal = textoFinal + "o";
                i = i + 3;
                break;
            case "u": textoFinal = textoFinal + "u";
                i = i + 3;
                break;
            default: textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}



btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);

})


