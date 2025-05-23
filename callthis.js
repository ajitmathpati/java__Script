function setusername(username) {
    this.username = username;
 
 
    
}
function createuser(username, email, password) {
    setusername.call(this,username);
  
    this.email = email;
    this.password = password;

}
const chai = new createuser('ajit', 'a23@', '1583');
console.log(chai);
// JS सबसे पहले एक नया empty object बनाता है: {}

// फिर createuser function के अंदर this उस नए object को point करता है।

// फिर setusername.call(this, username) कॉल होता है, जिससे setusername के अंदर this भी उस नए object को point करता है।

// इसलिए, this.username = username; उस नए object में username property जोड़ देता है।

// इसके बाद this.email और this.password भी उसी नए object में add हो जाते हैं।

// अंत में, पूरा object chai में return हो जाता है।