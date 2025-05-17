const obj = {
    username: "ajit ",
    logint: 8,
    signedin: true,
    getdetails: function () {
        console.log("username:", `${this.username} `);
        console.log("logint:", `${this.logint} `);
        console.log(this);



    }

}
// console.log(obj["username"]);
// console.log(obj.getdetails());
// const result = obj
console.log(obj);
