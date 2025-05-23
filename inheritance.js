class user {
    constructor(name) {
        this.name = name;
    }
    logme() {
        console.log(`hello ${this.name}`);

    }
}
class admin extends user {
    constructor(name, email, password) {
        super(name);
        this.email = email;
        this.password = password;

    }
    addcourese() {
        console.log(`i am admin${this.name}`);

    }
}
class techer extends user {
    constructor(name, email, password) {
        super(name);
        this.email = email;
        this.password = password;

    }
    addcourese() {
        console.log(`i am techer ${this.name}`);

    }
}
const chai = new admin('ajit', 'ajit@123', '12345');
const sujit=new techer('sujit ','sujit@1233','3232');
sujit.addcourese();
chai.addcourese();
// let ajit = new user('sujit');
// ajit.logme();
