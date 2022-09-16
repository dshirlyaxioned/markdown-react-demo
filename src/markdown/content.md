## 1. Sort an Array

<Code language='javascript'>
//strings 
const names = ["Seema", "Rekha", "Jaya"]; names.sort(); 
//['Jaya', 'Rekha', 'Seema' ]

//Numbers
const numbers = [101, 8, 87]; numbers.sort((a, b) => { return a - b; });
//[ 8, 87, 101 ]
</Code>

## 2. Loop through an array

<Code language='javascript'>
const cars = ["Ford", "BMW", "Audi" ] 
for (let car of cars) 
{ console.log(car) }
</Code>

## 3. Replace a string

<Code language='javascript'>
const string = "You are awesome." 
const replacedString = string.replace("You", "We")
console.log(replacedString)
//Output: "We are awesome"
</Code>
