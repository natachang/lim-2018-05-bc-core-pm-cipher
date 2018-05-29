window.cipher = {
   
  encode : () => {
    var output="";
        var text = document.getElementById("mes").value;
        var displa = parseInt(document.getElementById("disp").value);
        for (var i=0; i<text.length;i++){
            if(65<=text.charCodeAt() && text.charCodeAt()<=90) {output += String.fromCharCode((text.charCodeAt(i)-65+displa)%26+65)};
            if(97<=text.charCodeAt() && text.charCodeAt()<=122) {output += String.fromCharCode((text.charCodeAt(i)-97+displa)%26+97)};
       }

        document.getElementById("mes2").value = output;
  },
 
  decode : () => {
    var output="";
    var text = document.getElementById("mes").value;
    var displa = parseInt(document.getElementById("disp").value);
    for (var i=0; i<text.length;i++){
    output += String.fromCharCode(text.charCodeAt(i)-displa);
     }
     //return alert(output); 
     document.getElementById("mes2").value = output;
    }
  
  };


  