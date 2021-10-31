// const person ={
//     name:'fatima',
//     age:32,
//     location:{
//         country:'EUR',
//         city:'Canada'
//     }
// }


// const {name , age} = person;
// const {country , city:cityname} = person.location;
// console.log(`My name is ${name} and age is ${age}`)
// console.log(`${country} , ${cityname}`)

// const book= {
//     title:'Ego is the enemy',
//     author:'Robin Sharma',
//     publisher:{
//         puname : 'Penguin'
//     }
// }

// const {title , author} = book;
// const {puname: nameof = 'Unonkw'} = book.publisher;

// console.log(`the book: ${title} is publish by ${nameof}`)


const address = ['Khartoum Sudan' , 'Bahri Kafouroi', 'addr']

const [city ,  , add] = address;
console.log(`${city} , ${add}`)