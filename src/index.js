
//Declarando variables globales
let text = document.getElementById("userMessage");
let displacements = document.getElementById("displacements");
let result = document.getElementById("result");

//Cuando carge por completo la página estará disponible la funcionalidad de los botones
window.onload = function() {
    /*Si el usuario hace click en el boton "Cifrar" se disparará la siguiente función que 
    codificará el texto*/
    document.getElementById("encode").addEventListener("click", function(){
        result.value = cipher.encode(displacements.value, text.value);
    });
    
    /*Si el usuario hace click en el boton "Descifrar" se disparará la siguiente función 
    que decodificará el texto*/
    document.getElementById("decode").addEventListener("click", function(){
        text.value = cipher.decode(displacements.value, result.value);
    });     
};



