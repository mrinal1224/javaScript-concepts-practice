let person ={
    name:'Mrinal',
    country:'India',
    age:'22'
}

let copy = {...person}
copy.country ='England'

console.log(person)
console.log(copy)