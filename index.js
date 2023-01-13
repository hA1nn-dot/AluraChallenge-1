let btnEncriptar = document.querySelector(".btn-encriptar");

let btn_Copiar  = document.querySelector(".btnCopiar");

btn_Copiar.onclick = () => {
    const text = document.querySelector(".AreaCodificar");
    text.select();
    document.execCommand("copy");
    alert("Elemento copiado")
}

btnEncriptar.onclick = () => {
    let texto = document.querySelector(".text").value;
    let cadenas = texto.split(" ")
    let result = ""
    cadenas.forEach(element => {
        for(let i = 0; i <= element.length - 1; i++){
            result = result + codificar(element.charAt(i))
        }
        result = result + " "
    });
    document.querySelector(".container__message-no__message").style.display = "none"
    document.querySelector(".container__message-text").style.display = "flex"
    document.querySelector(".AreaCodificar").value = result
}

function codificar(letra){
    let claves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    for (const prop in claves){
        if(letra === prop){
            return claves[prop]
        }
        
    }
    return letra
}