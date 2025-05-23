class user {
    constructor(name) {
        this.name = name;
    }
}
class admin extends user {
    constructor(name, email, password) {
        super(name);
        this.email = email;
        this.password = password;

    }
    addcourese() {
        console.log(`couser add by ${this.name}`);

    }
}
const chai = new admin('ajit', 'ajit@123', '12345');
chai.addcourese();
