

((a,b)=>{
    console.log(a*b)
    console.log("Hello")
})(6,7);//hamesha 2 iife ke bich me semicolon lagana jaruri hota hai 




(function myfn(c,d){
    console.log(c+d)
    console.log("by")
})(1,2)

//why we use iife=>

// function ko immideately call karwane ke liye hum iife ka use karte hai lakin hum fir is function ko khi or call nhi karwa sakte hum iiffe isliye hi banate hai kyuki jo function hame ek hi baar kaam me lena ho or dubara uska kaam nhi hota to use iffe me dal dete hai.