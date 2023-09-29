
/*Faça um algoritmo que após a entrada de uma determinada distância entre dois pontos(Km), e uma determinada 
velocidade(Km/h), diga qual o tempo médio que levará para chegada à esse local e qual a velocidade em metros/segundos.*/

//importação da interface de leitura
import * as readline from 'readline'

//criacão da interface de leitura
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

////aqui recebo os valores atraves do metodo readline que é a interface de leitura
rl.question("informe a distancia entre um ponto e o outro: ",(d) => {
rl.question("informe a velocidade: ",(v) => {

 
 var distancia=parseFloat(d)
 var velocidade=parseFloat(v)

 var tempomedio=distancia/velocidade
 var vms=velocidade*(1000/3600)
 var timeinminutes=tempomedio*60
 var timeinseconds=timeinminutes*60;

console.log("o tempo medio foi: ",tempomedio)
console.log("velocidade metros por segundo: ",vms.toFixed(2))
console.log("tempo em minutos: ",timeinminutes)
console.log("tempo em segundos: ",timeinseconds)
    rl.close()
});
});