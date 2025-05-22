function createuser(name, age) {
    this.name = name;
    this.age = age;


}
createuser.prototype.incerment = function () {
    this.age++;

}
createuser.prototype.printme = function () {
    console.log(`age increment :${this.age}`);

}
const user1 = new createuser('sachin', 23);
const user2 = new createuser('ajit', 24);
user1.incerment();
user1.printme();
user2.incerment();
user2.printme();
