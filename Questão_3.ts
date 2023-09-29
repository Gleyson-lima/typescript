/*Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).*/

//importacão do modulo de leitura de dados
import * as readline from 'readline'

//criação da interface e leitura
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//vai receber o dado do usuario e passar a variavel farenheit
rl.question('informe a temperatura em graus farenheit: ',(graus) => {
    
    var farenheit=parseFloat(graus)
    var celsius=5*((farenheit-32)/9)
   
    console.log(celsius.toFixed(2))
    
    //fecha a interface de leitura
    rl.close();
});