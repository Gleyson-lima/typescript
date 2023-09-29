/*Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de
 Internet (em Mbps),calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos)*/

 //importo o modulo de leitura de dados
 import * as readline from 'readline'

 //criacão da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('informe o tamanho do arquivo: ', (tamanho_mb) => {
rl.question('informe a velocidade da internet em mbps: ', (velocidade) => {

    var tamanho=parseFloat(tamanho_mb)
    var mbps=parseFloat(velocidade)

    var time_seconds=(tamanho*8)/mbps/60
    var time_minutes=time_seconds/60
    
    console.log('a velocidade de  download em minutos é :',time_minutes.toFixed(2));
    //fecha a interface de leitura
    rl.close();
});
});