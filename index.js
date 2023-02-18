
let declaredVariable;
let someData = 99;
let obj = {age: 33};

console.log(typeof 37);                    //number
console.log(typeof obj);                   //object
console.log(typeof someData + " Wisen");   //string 
console.log(typeof true);                  //boolean
console.log(typeof 3.14);                  //number
console.log(typeof obj.name);              //undefined  
console.log(typeof 42);                    //number
console.log(typeof "");                    //string
console.log(typeof "bla");                 //string
console.log(typeof Boolean(1));            //boolean
console.log(typeof !!1);                   //boolean 
console.log(typeof obj.age);               //number
console.log(typeof Infinity);              //number 
console.log(typeof NaN);                   //number
console.log(typeof Number("1"));           //number
console.log(typeof Number("shoe"));        //number
console.log(typeof `template literal`);    //string
console.log(typeof "1");                   //string
console.log(typeof typeof 1);              //string
console.log(typeof false);                 //boolean
console.log(typeof String(1));             //string
console.log(typeof undefined);             //udefined
console.log(typeof { a: 1 });              //object
console.log(typeof declaredVariable);      //undefined
console.log(typeof [1, 2, 4]);             //object
console.log(typeof null);                  //object 
console.log(typeof "John");                //string
console.log(typeof [] + '1');              //object1
console.log(typeof 1 + '1');               //number1
console.log(typeof 10 * '2');              //number 