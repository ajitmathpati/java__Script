function userdetails(username, age, city) {
    this.username = username;
    this.age = age;
    this.city = city;
    return this

}
const details = new userdetails("ajit", 21, "solapur");
//new keyword use nahi kiya to over write hota he
const info = new userdetails("sujit", 24, "solapur");
console.log(details);
console.log(info);