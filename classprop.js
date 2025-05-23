

class user {
    constructor(name) {
        this.name = name;

    }

     createid() {
        return 123;
    }
}
class student extends user {
    constructor(name, email) {
        super(name);

        this.email = email;
    }
}
const ajit = new user('ajit');
const suju = new student('sujit', 'ajit@gmail');
console.log(suju.createid());

// let sujit = user.createid();
// console.log(sujit);

