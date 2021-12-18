const frutas = [];
const numeral_um = [];

frutas.push("pera");
frutas.push("maçã");
frutas.push("goiaba");
//frutas.length = 1;






function digito(numero){

    numeral_um.push(numero)

    let tam =  numeral_um.length;
    let num1 = "";

    for(var i = 0; i < tam; i++){

        num1 = num1 + numeral_um[i];

        document.getElementById("demo").innerHTML = num1;


    }
    //document.write("<br>");
    //document.write(num1);
    //document.getElementById("demo").innerHTML = numeral_um;
    // document.write(numeral_um[0]);
}




