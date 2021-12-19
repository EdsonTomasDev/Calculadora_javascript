const frutas = [];
const numeral_um = [];
let numero1 = "";
let operador = ""//ARMAZENA TODOS OS ITENS DIGITADOS PARA EXIBIR EM TELA
let valor = ""
//VARIÁVELARMAZENA O EVENTO ATUAL, OU SEJA, SE 1, ENTÃO ESTAMOS GRAVANDO NO "NUMERAL_UM"
//APÓS PRESSIONAR O OPERADOR A VARIÁVEL RECEBERÁ O 2 E PASSAREMOS A GRAVAR NO "NUMERAL_DOIS"
let evento = 1;

const numeral_dois = [];
let numero2 = "";

frutas.push("pera");
frutas.push("maçã");
frutas.push("goiaba");
//frutas.length = 1;






function digito(numero){

    //ADICIONA ITENS AO NÚMERO 1
    if (evento == 1){
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

    }else{
        //ADICIONA ITENS AO NÚMERO 1
        numeral_dois.push(numero)

        let tam =  numeral_dois.length;
        let num2 = "";
        //ARMAZENA QUANTAS VEZES O PONTO "." APARECE
        let ponto = 0;
        //PERCORRE O ARRAY numeral_um E CADA ITEM ENCONTRADO É CONCATENADO NA VARIÁVEL num1
        //PARA EM SEGUIDA EXIBIR NA TELA
        for(const element of numeral_dois){
            
            
            //ARMAZENA O elemento atual do array
            item = element;

            if (item == "."){
                ponto = ponto + 1;

                if (ponto == 1){
                    num2 = num2 + ".";
                }

            }else{
                num2 = num2 + item;

            }

        numero2 = parseFloat(num2);
            

            document.getElementById("demo").innerHTML = numero2;
            document.getElementById("tela").value = valor + " " + numero2;


        }
        

    }
    
    
    
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
        
        evento = 2;//A PARITR DE AGORA SERÁ ARMAZENADO OS ITENS NO "NUMERAL_DOIS"
        valor = numero1 + " " + operador;
        document.getElementById("tela").value = valor;

    }

    
    
}


function limpar(){

    document.getElementById("tela").value = "";

    numero1 = "";
    numero2 = "";
    operador = "";
    evento = 1;
    //LIMPAR O ARRAY, A PARTIR DA POSIÇÃO "0"
    numeral_um.splice(0,numeral_um.length);
    numeral_dois.splice(0,numeral_dois.length);
}

