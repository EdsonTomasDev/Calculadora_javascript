const frutas = [];
const numeral_um = [];
let numero1 = "";
let operador = ""

frutas.push("pera");
frutas.push("maçã");
frutas.push("goiaba");
//frutas.length = 1;






function digito(numero){

    numeral_um.push(numero)

    let tam =  numeral_um.length;
    let num1 = "";
    //ARMAZENA QUANTAS VEZES O PONTO "." APARECE
    let ponto = 0;
    //PERCORRE O ARRAY numeral_um E CADA ITEM ENCONTRADO É CONCATENADO NA VARIÁVEL num1
    //PARA EM SEGUIDA EXIBIR NA TELA
    for(const element of numeral_um){
        
        
        //ARMAZENA O elemento atual do array
        item = element;

        if (item == "."){
            ponto = ponto + 1;

            if (ponto == 1){
                num1 = num1 + ".";
            }

        }else{
            num1 = num1 + item;

        }

      numero1 = parseFloat(num1);
        

        document.getElementById("demo").innerHTML = numero1;
        document.getElementById("tela").value = num1;


    }
    //document.write("<br>");
    //document.write(num1);
    //document.getElementById("demo").innerHTML = numeral_um;
    // document.write(numeral_um[0]);
}

//FUNÇÃO ATRIBUI A VARIÁVEL O TIPO DE OPERACÃO
function operacao(tipo){

    if (numero1 != ""){
        if (tipo == "soma"){
            operador = "+";
        }
        if (tipo == "menos"){
            operador = "-";
        }
        if (tipo == "multi"){
            operador = "X";
        }
        if (tipo == "divisao"){
            operador = "/";
        }
    
        let valor = numero1 + operador;
        document.getElementById("tela").value = valor;

    }

    
    
}




