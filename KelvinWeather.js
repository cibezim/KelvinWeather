// Kelvin Weather

// Kelvin is 293 for the day
const Kelvin = 293;
// celsius is 272 degrees less than Kelvin
const Celsius = Kelvin - 273;
// Number is rounded to nearest number so value must change
let Fahrenheit = Celsius * (9/5) + 32;
// Round down Fahrenheit temperature
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)

let Newtown = Celsius * (33/100);
Newtown = Math.floor(Newtown);
console.log(`The temperature is ${Newtown} degrees Newton`);