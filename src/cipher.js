window.cipher = {
   
  encode : (offset, string) => {
    let output="";
    let displacement = parseInt(offset);
    for (var i=0; i<string.length; i++){
    if(65<=string.charCodeAt(i) && string.charCodeAt(i)<=90) {
      output += String.fromCharCode((string.charCodeAt(i)-65+displacement)%26+65)
    }

    if(97<=string.charCodeAt(i) && string.charCodeAt(i)<=122) {
      output += String.fromCharCode((string.charCodeAt(i)-97+displacement)%26+97)
    }
    }

    return  output;

        
  },
 
  decode : (offset, string) => {
    let output="";
    let displacement = parseInt(offset);
    for (var i=0; i<string.length;i++){
    if(65<=string.charCodeAt() && string.charCodeAt()<=90) {
      output += String.fromCharCode((string.charCodeAt(i)-90-displacement)%26+90)
    }
    if(97<=string.charCodeAt() && string.charCodeAt()<=122) {
      output += String.fromCharCode((string.charCodeAt(i)-122-displacement)%26+122)
    }
    }
  
    return output;
  },

  createCipherWithOffset : (offset) => {

    return {
        
      encode:(string) => {return cipher.encode(offset, string)},
      decode:(string) => {return cipher.decode(offset, string)}

    }







  }











};




  