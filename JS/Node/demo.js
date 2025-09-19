// npm install prompt-sync  ou    npm i para import para a pasta

// prompt é a variavel constante que usa o modulo prompt-sync
const prompt = require('prompt-sync')();
let nomeAdvinha ='Dario';

function adivinhaONome (nomeAdvinha){
    //const prompt: PromptSync.Prompt devolve uma string atençao aos numbers Cast (Parseint or Parsefloat)
let nomeAdvinhado=prompt('intrud nome a adivinhar');
if(nomeAdvinha===nomeAdvinhado){
console.log('Acertou');
}
else{
    console.log('Falhou');
}
}
adivinhaONome(nomeAdvinha);