class ajit {
    constructor(email, password) {
        this.email = email;
        this.password = password;

    };
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
    set email(value) {
        this._email = value;
    }
    get email(){
        return this._email.toUpperCase();

    }
}
const info = new ajit('ajitmathpati211@gmail.com', 'ajit1234');
console.log(info.password ,info.email);
