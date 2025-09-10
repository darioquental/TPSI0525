let nome = 'Dario'; // String literal 
let num = 1233; // Number literal
let flag = true // Boolean Literal
let variavel; //   undefined
console.log(variavel);
let typenull=null;
console.log(typeof(typenull));
let array =[];
console.log(typeof(lista));
let bool = true;


// cast variavel types string to bool
nome='';
bool=Boolean(nome);
console.log(bool);
nome='Dario';
bool=Boolean(nome);
console.log(bool);


// cast variavel types number to bool
num=15675;
bool=Boolean(num);
console.log(bool);

num=0;
bool=Boolean(num);
console.log(bool);

// cast variavel types number to string

nome= String(num);
console.log(nome);
console.log(typeof(nome));

// cast variavel types string to number
nome='Dario';
num= Number(nome);
console.log(num);
console.log(typeof(num));

// NaN

//arrays 
array[0]='Dario';
array.push(array[0]);
array[2]='Joao';
console.log(array);