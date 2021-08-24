/**
 * Não podemos criar constantes com palavras reservadas,
 * constantes devem ter nome com valor significativos,
 * Não pode começar o nome de constante com um numero , ex: 1nome
 * Nome de constatnte não pode conter espaço ou traço
 * 
 * utilize para descrever as variaveis camelCase
 * Constantes são Case-sensitive
 * Não podemos redeclarar
 * Não pode modificar o valor de uma constante
 * NÃO UTILEZE VAR , UTILIZE CONST
 *  */ 


const nome = 'João';
console.log(nome);

//nome = 'mauricio'// isso causa erro quando modifica o valor de uma constante

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado *2
let resultadoTriplicado = resultado *3
resultadoTriplicado = resultadoTriplicado + primeiroNumero

console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)
console.log(typeof primeiroNumero)