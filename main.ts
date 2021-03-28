var myVar: string = 'ciao';

var myVar2: string;
myVar2 = 'ciao';

let myVar3: string = 'ciao';

const myConstant = 'ciao';

let myNumber: number = 10;

let myBoolean :boolean = true;

let myNumber2: number | undefined;
console.log('myNumber2 = ', myNumber2);

let myObject: object =  {};

let anyObj: any;
anyObj = 'ciao';
anyObj = 10;
anyObj = {
    ad: 10
}

let myList : number[] = [12, 13, 14]
let myStringList: string[] = ['ciao','a','b'];

let myTuple : [string, number] = ['ciao',10];


for(let x = 0; x < 10; x= x + 1 ){
    console.log('Ciclo for - Numero: ', x);
}

const numbers = [2, 4, 6, 8];
for(const x of numbers){
    console.log('Ciclo foreach - Numero: ', x);
}


let x = 1;
while (x < 10){
    console.log('Ciclo while - numero: ', x);
    x = x +1;
}


const first_numbers = [1,2,3,4,5];
let sum: number = 0;

for(let index: number = 0; index < 5; index = index + 1){
    sum = sum + first_numbers[index];
}

console.log("La somma è : ", sum);

console.log("La media è : ", sum/first_numbers.length);

let nameToPrint: string = hello('Gian Luca');
console.log("La stringa di ritorno è: " + nameToPrint);

console.log(greeting('Gian Luca'));
console.log(greeting('Gian Luca','en'));
console.log(greeting('Gian Luca','es'));

//--------------------

//LAMBDA FUNCTION

const random = (min: number, max: number) => {
    return Math.random() * (max-min) + min;
};

console.log('random number between 3 and 5: ', random(3, 5));

const minimo = (arr: number[]) : number => {

  let min = arr[0];
  for(let n of arr){
      if(n < min){
          min = n;
      }
  }
  return min;
}

const massimo = (arr: number[]) : number => {

    let max = arr[0];
    for(let n of arr){
        if(n > max){
            max = n;
        }
    }
    return max;
  }

//---------------------

let arrayOfNumbers : number[] = [1,2,3,4,5];

console.log('La somma vale: ',  sum_array(arrayOfNumbers));
console.log('La media vale : ', media_array(sum_array(arrayOfNumbers), arrayOfNumbers.length));


function sum_array(listToAdd : number[]): number{
    
    let incrementalSum: number = 0;

    for(let index: number = 0; index < 5; index = index + 1){
        incrementalSum = incrementalSum + listToAdd[index];
    }

    return incrementalSum;

}

function media_array(sumTotal : number, length: number){

    return sumTotal / length;

}


//-------------------------


function hello(name: string): string {
    console.log('Hello world!');
    console.log('Hello from ', name);
    return name;
}


function greeting (name: string, lang: "en" | 'it' | 'es' = 'it'){

const greetMap = {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola',
}

const greetingWord = greetMap[lang];

return `${greetingWord} ${name}`;

}



//----------------------

//FUNZIONI DI ORDINE SUPERIORE (FUNZIONI CHE HANNO IN INGRESSO
//ALTRE FUNZIONI)

function printFunction (func: () => void){
    console.log('calling function');
    func();
    console.log('function called');
}

printFunction( () => {
    console.log(greeting('Gian Luca'));
} );


const numbersToTest: number[] = [1, 2, 3, 4, 5];

const squaredNumbers = numbersToTest.map( n => n*n);
const oddNumbers = numbersToTest.filter(n => n%2 != 0).map(n => n + 10);

console.log('Squared numbers', squaredNumbers);
console.log('Odd numbers: ', oddNumbers);



/* Compilare codice implementato in typescrit in javascript in modo
*da poterlo distribuire in ambiente node senza bisogno di installare typescript,
*quindi per poter renderlo un pò più veloce.
*/

//Programma scritto in typescript quindi non automaticamente leggibile da Node Js
//oppure dal browser; i browser non capiscono direttamente typescript ma javascript.

/*
* ts-node è un wrapper typescript che da la capacità a Node JS di leggere codice nativo
* typescript, solitamente non vogliamo, perché ts-node è un più più lento perché il parser 
* deve leggere un lungaggio un pò più complesso di javascript
* Typescript ci mette a disposizione tsc: comando che permette di compilare producendo un file sotto
* la directory dist contenente il codice javascript.
* Una volta fatto questo occorre invocare tale codice con node seguito dal file
* contenente il codice javascript;
* Ts-node è infatti più lento perché al suo interno prima compila il codice in javascript
  e poi invoca node su di esso 
*/


/* DIPENDENZE IN NODE
* npm (node packet manager) = sistema per installare e gestire pacchetti esterni che altri utenti 
* hanno già rilasciato all'interno della repository
* Es. faker = libreria per generare dati finti di alcune persone (mokare) che usano l'applicazione 
* senza chiedere a decine, centinaia di persone di usarla.
*
* npm i faker = npm install faker => 
* 1) file package.json contiene nuova sezione dedicata alle dependencies con faker.
* 2) viene generato file package-lock.json importante per mantenere la funzionalità
* di tutte le dipendenze che installiamo, in particolare per gestire le sottodipendenze
* delle librerie e deve essere committata all'interno della nostra repository.
* 
* faker non contiene tipi typescript per utilizzarla, cioè typescript non trova i tipi
* per poterlo utilizzare: risulta errore se scriviamo
* import faker from 'faker'
* Soluzione: npm install @types/faker per installare le dipendenze. 
* Quasi tutte le librerie funzionano in questom modo.
* Da installare con opzione --save-dev ad indicare che non si tratta di una libreria
* di sistema da includere nel bundle finale javascript, ma che serve solo per sviluppo.
* Se andiamo nel file package.json, dependencies saranno le dipendenze che andranno ufficialmente
* nel pacchetto che noi distribuiamo; devDependencies sono le dipendenze che ci sono
* solamente a scopo di sviluppo.
*
* Node js = back end
* browser = front-end
*
* Programmazione server-side (back-end) e client-side (front-end)
*
* Nasce figura sviluppatore fullstack: risorsa unica in grado di gestire
* un progetto sia in ambito back-end che in ambito front-end:
* - progetto visto per la sua interezza e non solo focalizzandosi su alcune
* tecnologie;
* - molto complesso (ma a mio avviso molto divertente);
*
* Javascript nasce come linguaggio di programmazione Client-side, 
* per i browser web.
*
* Con Node.js nel 2010 è possibile eseguire codice javascript in modalità backend
*
* Javascript (e i suoi derivati) è un linguaggio di programmazione fullstack.
*
* Codice fullstack è un codice che può girare contemporaneamente sia in ambito
* back-end che front-end.
* Idea del fullstack: Javascript con Node e con API del browser ci permette di girare
* di creare un progetto unico e distribuire il nostro codice come vogliamo
* Ma attenzione: non tutto il codice javascript back-end può girare sul front-end
* e viceversa.
*
* 1) creiamo codice compilato con Javascript e poi facciamolo girare su un browser
*
* 1) Dentro Node possiamo creare un server http o un server in generale, perché il layer http
* può essere acceduto solo da backend all'interno di un pc.
* 2) Node ci permette di accedere al file system.

I due punti sopra non si possono realizzare da browser.
*
* Installazione dei tipi Node di cui abbiamo bisogno npm install -D @type/node
*
*/