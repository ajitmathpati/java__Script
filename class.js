//ES6
class user {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    newpassword() {
        return `${this.password}abc123`;

    }
    changeletter() {
        return `${this.name.toUpperCase()}`
    }

}
const ajit = new user('ajit ', 'ajit123@.gmail.com', '!@#');
console.log(ajit.newpassword());
console.log(ajit.changeletter());


