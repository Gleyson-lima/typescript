/*Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se
 este ano é ou não bissexto.*/

 //importação da interface de leitura
import * as readline from 'readline'

//criação da interface de leitura
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("informe o ano para verificar se é bissexto: ", (a) => {
    var ano=parseInt(a)
    
    //se o ano for divisivel por 4  "E" ano não for divisivel por 100 "OU" ano divisivel por 400
    if(ano%4==0 && ano%100!=0 ||ano%400==0){
        console.log("é bissexto")
    }
    else{
        console.log("não é bissexto")
    }

    //fecha  a interface de leitura
    rl.close()
});