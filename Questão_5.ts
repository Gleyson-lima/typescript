/*Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um
triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno */

//importação a interface de leitura
import * as  readline from 'readline'

//crio a interface de leitura
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//aqui recebo os valores atarves do metodo readline que é a interface de leitura
rl.question("tamanho lado a: ", (a) => {
rl.question("tamanho lado b: ", (b) => {
rl.question("tamanho lado c: ", (c) => {
    var ladoA=parseInt(a)
    var ladoB=parseInt(b)
    var ladoC=parseInt(c)
    
    //se todos os laos forem iguais
    if (ladoA==ladoB && ladoB==ladoC){
        console.log("é equilatero")
    }
    //se apenas 2 lados forem iguais 
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
       console.log("é isoceles")
    }
    //se todos forem diferentes 
    else{
        console.log("é escaleno")
    }
    
    //fecha a interface de leitura
    rl.close()
});
});
});
