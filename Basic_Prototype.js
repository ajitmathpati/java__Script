// const mutiplication = (num) => {
//     return num * 5;

// }
// mutiplication.power=2;
// console.log(mutiplication(5));
// console.log(mutiplication.power);
// console.log(mutiplication.prototype);


function createuser(myname, score) {
    this.myname = myname;
    this.score = score;
}
createuser.prototype.increment = function () {
    this.score++;
}
createuser.prototype.printme = function () {
    console.log(`my score is ${this.score}`);

}


const coffee =new createuser('coffee', 20);
const chai = new createuser('tea', 50);
coffee.increment();

coffee.printme();
chai.increment();
chai.printme();

