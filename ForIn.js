const myobj = {
    name: "ajit",
    age: 21,
    city: "solapur",
    hobby: "batmitan"
}
for (const key in myobj) {
    console.log(`${key} := ${myobj[key]}`);
}
const myArray=[10,20,30,40,50];
for(const key in myArray){
    console.log(key,myArray[key]);

    
}