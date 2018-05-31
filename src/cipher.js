window.cipher = {
   
  encode : (offset, string) => {
    let output="";
    let displacements = parseInt(offset);
    for (var i=0; i<string.length; i++){
    if(65<=string.charCodeAt(i) && string.charCodeAt(i)<=90) {
      output += String.fromCharCode((string.charCodeAt(i)-65+displacements)%26+65)
    }

    if(97<=string.charCodeAt(i) && string.charCodeAt(i)<=122) {
      output += String.fromCharCode((string.charCodeAt(i)-97+displacements)%26+97)
    }
    }

    return  output;

        
  },
 
  decode : (offset, string) => {
    let output="";
    let displacements = parseInt(offset);
    for (var i=0; i<string.length;i++){
    if(65<=string.charCodeAt() && string.charCodeAt()<=90) {
      output += String.fromCharCode((string.charCodeAt(i)-90-displacements)%26+90)
    }
    if(97<=string.charCodeAt() && string.charCodeAt()<=122) {
      output += String.fromCharCode((string.charCodeAt(i)-122-displacements)%26+122)
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




  