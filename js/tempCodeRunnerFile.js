let myObj = {
    name: "Nilesh",
    class: "9",
    age : "87",
}

let details = function(address,pincode){
    console.log("Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age+" Address:- "+address+" Pincode:- "+pincode)
}

let secondObj = {
    name: "Vinit",
    class: "8",
    age : "13"
}

details.call(myObj,"Jaipur","302050")
details.call(secondObj,"Tonk","304001")