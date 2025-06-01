// function outer() {
//     let name = "ajit";
//     function inner() {
//         console.log("inner name:", name);
//     }
//     inner();
// }
// outer();
// console.log("outer nam:", name);


function makefun() {
    let name = "ajit";
    function display() {
        console.log("name:", name);

    }
    return display;
}
const myfun = makefun();
console.log("myfun:",myfun);

myfun();