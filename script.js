const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((country) => console.log(country))
names.forEach((name) => console.log(name))
numbers.forEach((number) => console.log(number))
const countriesUP=countries.map((country)=>country.toUpperCase())
console.log(countriesUP)
const countriesLength=countries.map((country)=>country.length)
console.log(countriesLength)
const squares=numbers.map((num)=>num**2)
console.log(squares)
const namesUP=names.map((name)=>name.toUpperCase())
console.log(namesUP)
const prices=products.map((obj)=>obj.price)
console.log(prices)
const sixLetters=countries.filter(x=>x.length==6)
console.log(sixLetters)
const sixLettersPlus=countries.filter(x=>x.length>=6)
console.log(sixLettersPlus)
const letterE=countries.filter((country)=>country[0]=="E")
console.log(letterE)
const namesSevenPlus=names.some((name)=>name.length>=7)
console.log(namesSevenPlus)
const countriesLand=countries.every((country)=>country.includes("land"))
console.log(countriesLand)
const countriesSix=countries.find((country)=>country.length==6)
console.log(countriesSix)
const countriesSixIndex=countries.findIndex((country)=>country.length==6)
console.log(countriesSixIndex)
const countriesFind=countries.findIndex((country)=>country=="Norway")
console.log(countriesFind)
const countriesFind2=countries.findIndex((country)=>country=="Russia")
console.log(countriesFind2)
let num=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function reverse(array){
    let array2=[]
    let x=array.length-1
    for(i=0; i<=array.length-1; i++){
    item=array[x]
    array2.push(item)
    x--}
    return array2
}
console.log(reverse(num))
// const sides=[2,3,4,6,7,8]
// let area=(sides)=>{
//     return sides*sides
// }
// let peri=(sides)=>{
//     return 4*sides
// }
// let calculate=(sides, flogic)=>{
//     let areavalues=[];
//     for(i=0; i<sides.length; i++){
//         areavalues.push(flogic(sides[i]))
//     }
//     return areavalues
// }
// console.log(calculate(sides,area )) 
// console.log(calculate(sides,peri))