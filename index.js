let btnEncriptar = document.querySelector(".btn-encriptar");


btnEncriptar.onclick = () => {
    let texto = document.querySelector(".text").value;
    let cadenas = texto.split(" ")
    let result = ""
    cadenas.forEach(element => {
        for(let i = 0; i <= element.length - 1; i++){
            result = result + codificar(element.charAt(i))
            // codificar(element.charAt(i))
            // console.log(element.charAt(i));
            // const newstr = element
            // .replace(/a/i, "ai")
            // .replace(/e/i, "enter")
            // .replace(/i/i, "imes")
            // .replace(/o/i, "ober")
            // .replace(/u/i, "ufat");
        }
        result = result + " "
    });
    document.querySelector(".container__message-no__message").style.display = "none"
    document.querySelector(".container__message-text").style.display = "flex"
    document.querySelector(".AreaCodificar").value = result
    console.log(result);
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