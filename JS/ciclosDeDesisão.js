//IF and Switch
let num1=3;
let num2=2;

if (num1>num2){
    console.log('maior é ',num1);
}
else if(num1===num2){
    console.log('Sao iguais');
}
else{
    console.log('maior é ',num2);
}

//switch
let opc =2;

switch (opc){
    case 1:
        console.log('esc 1');
    break;
    case 2:
        console.log('esc 2');
    break;
    case 3:
        console.log('esc 3');
    break;
    default:
        console.log('Default');   
    break;
}