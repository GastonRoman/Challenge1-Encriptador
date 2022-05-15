const inputTexto = document.querySelector(".text-input")
const mensaje = document.querySelector(".mensaje")



document.getElementById("input-text").style.visibility = "hidden";
document.getElementById("texto4").style.visibility = "hidden";
document.getElementById("copiar").style.visibility = "hidden";

inputTexto.focus();


function btnencriptar(){
    document.getElementById("input-text").style.visibility = "visible";
    document.getElementById("texto4").style.visibility = "visible";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("prueba").style.display = "none";
    const textoEncriptado = encriptarTexto(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function btndesencriptar(){    
    document.getElementById("input-text").style.visibility = "visible";
    document.getElementById("texto4").style.visibility = "visible";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("prueba").style.display = "none";
    const textoDesencriptado = desencriptarTexto(inputTexto.value);
    mensaje.value = textoDesencriptado;
    
}

function encriptarTexto(string){    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    string = string.toLowerCase()
    for (let i=0; i < matrizCodigo.length; i++) {
        if(string.includes(matrizCodigo[i][0])){
            string = string.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }  
    return string;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i=i+3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;

}

const kClipboard = navigator.clipboard
function uiCopiar() {
  if (kClipboard) {
    kClipboard
      .writeText(mensaje.value)
      .then(() => alert('Copiado'))
  }
  inputTexto.focus();
}

