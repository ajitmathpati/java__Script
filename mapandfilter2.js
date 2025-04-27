//mapandfiltermethod

const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newarray = myarray.map((value) => value * 10).map((value) => value + 1).filter((value) => value >= 50);
console.log(newarray);
