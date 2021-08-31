//Ejercicio 1

//var name = "John";
//var admin = name;

//alert(admin)


//Ejercicio 2

var planet = "Planet Earth"
var newVisitant = "John Doe"


//Ejercicio 3

const birthday = new Date("04/18/1982");  
var month_diff = Date.now() - birthday.getTime();       
var age_dt = new Date(month_diff);       
var year = age_dt.getUTCFullYear();    
var age = Math.abs(year - 1970);  
console.log(age)

//Usar MAYUSCULAS para birthday y age no es correcto ya que lo normal es usar camel case


//Ejercicio 4

//¿Cuál es el resultado del script?
let name = "Ilya";
alert( `hello ${1}` ); // ? hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // ? hello Ilya


//Ejercicio 5

let object = []
object["name"] = "John"
console.log(object.name)
object["surname"] = "Smith"
object["name"] = "Pete"
console.log(object.name)
delete object.name
console.log(object)


//Ejercicio 6



function isEmpty(obj) {
 return !Object.keys(obj).length
}
let schedule = {};
alert( isEmpty(schedule) ); // true 
schedule["8:30"] = "get up"; 
alert( isEmpty(schedule) ); // false


//Ejercicio 7 
let salaries = { 
John: 100,
Ann: 160,
Pete: 130
}

let mySum = 0

for(key in salaries) {
  mySum += salaries[key]
  console.log(mySum)
}

//Ejercicio 8

let menu = {
 width: 200,
 height: 300,
 title: "My menu"
};

for(key in menu) {
  if(typeof(menu[key]) === "number")  {
    menu[key] = menu[key]*2
  }
  console.log((menu[key]))
}