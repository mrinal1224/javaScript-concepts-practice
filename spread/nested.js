let details ={
    name :"Mrinal",
    age:"22",
    address :{
         state : "MP",
         pincode : '12345'
    }
}


let copy= {...details , address:{...details.address}}
copy.address.state='UP'



console.log(details)
console.log(copy)