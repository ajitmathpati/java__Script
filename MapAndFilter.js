//MAP AND FILTER METHOD
const myarray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let newarray = myarray.filter((value) => {
    return (value > 40);
})
console.log(newarray)