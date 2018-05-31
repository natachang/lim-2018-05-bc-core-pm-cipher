

   
let text = document.getElementById("mes");
let displa = document.getElementById("disp");
let result = document.getElementById("mes2");



window.onload= function() {

    document.getElementById("cip").addEventListener("click", function(){


    result.value = cipher.encode(displa.value, text.value);
      
    });


    
    document.getElementById("dec").addEventListener("click", function()
    {


    result.value = cipher.decode(displa.value, text.value);

    });
     
};



