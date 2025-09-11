// npm install prompt-sync
//Adivinha o nome
const prompt = require('prompt-sync')();
let nomeAdvinha ='Dario';

function adivinhaONome (nomeAdvinha){
let nomeAdvinhado=prompt('intrud nome a adivinhar');
if(nomeAdvinha===nomeAdvinhado){
console.log('Acertou');
}
else{
    console.log('Falhou');
}
}
adivinhaONome(nomeAdvinha);