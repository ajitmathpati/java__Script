function outer() {
    let name = "ajit";
    function inner() {
        console.log("inner name:", name);
    }
    inner();
}
outer();
console.log("outer nam:", name);;
