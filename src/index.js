

   
let text = document.getElementById("message");
let displacements = document.getElementById("displacements");
let result = document.getElementById("message2");



window.onload= function() {

    document.getElementById("encode").addEventListener("click", function(){


    result.value = cipher.encode(displacements.value, text.value);
      
    });


    
    document.getElementById("decode").addEventListener("click", function()
    {


    result.value = cipher.decode(displacements.value, text.value);

    });
     
};



