function cipherEncode(){
	var output="";
	var text = document.getElementById("mes").value;
	var displa = parseInt(document.getElementById("disp").value);
	for (var i=0; i<text.length;i++){
		output += String.fromCharCode(text.charCodeAt(i)+displa);
    }
    //return alert(output); 
    document.getElementById("mes2").value = output;
}

function cipherDecode(){
    var output="";
	var text = document.getElementById("mes").value;
	var displa = parseInt(document.getElementById("disp").value);
	for (var i=0; i<text.length;i++){
		output += String.fromCharCode(text.charCodeAt(i)-displa);
    }
    //return alert(output); 
    document.getElementById("mes2").value = output;
}