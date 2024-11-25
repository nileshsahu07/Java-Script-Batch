// this =>

// let myObj  = {
//     name : "nilesh",
//     class : "12",
//     age : "8",
//     fullDetails: function(){
//         // console.log(this) //only this se pura obj show hota hai

//         console.log("First Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age)
//     }
// }

// myObj.fullDetails()



// js class=> class ke threw obj create karna

// class Products{
//     constructor(name,price,rating){
//         this.name = name
//         this.price = price
//         this.rating = rating
//     }
// }
//     let myfirstProduct = new Products("Iphone","999","4.5")
//     let mysecondProduct = new Products("Samsung","1999","4.6")

//     console.log(myfirstProduct)
//     console.log(mysecondProduct)


// what is class in js =>
    // ans => koi ek structure se alag alag person ka data create karna

class Employes{
    constructor(name,contact,work){
        this.name = name
        this.contact = contact
        this.work = work
    }
}

let firstEmploye = new Employes("Nilesh Pancholi",9461196141,"Developer")
let SecondEmploye = new Employes("Kashish Pancholi",4548785455,"Banker")
let ThirdEmploye = new Employes("Sajan Pancholi",7610020034,"Hardware")

console.log(firstEmploye)
console.log(SecondEmploye)
console.log(ThirdEmploye)





class fullStack{
    constructor(structure,styling,language,library,server,database){
        this.structure = structure,
        this.styling = styling,
        this.language = language,
        this.library = library,
        this.server = server,
        this.database = database
    }
}

const MernDeveloper = new fullStack("HTML","CSS","JS","ReactJS","NodeJS","MongoDB");
const MeanDeveloper = new fullStack("HTML","CSS","JS","Angular","NodeJS","MongoDB")

console.log(MernDeveloper)
console.log(MeanDeveloper)