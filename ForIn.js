const myobj = {
    name: "ajit",
    age: 21,
    city: "solapur",
    hobby: "batmitan"
}
for (const key in myobj) {
    console.log(`${key} := ${myobj[key]}`);
}