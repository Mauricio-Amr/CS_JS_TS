/**
 * 
 */

const nome = 'Mauricio'
const sobrenome = 'Amaral'
const idade = 36
const peso = 78
const alturaM = 1.80
let imc = peso / (Math.pow(altura, 2))
let ano_nas = 2021 -36;

console.log(`${nome} ${sobrenome} tem ${idade} anos , pesa ${peso}`)
console.log(`tem ${alturaM} de altura e seu IMC ${imc.toFixed(2)}`)
console.log(`Seu ano de nascimento é ${ano_nas}`)