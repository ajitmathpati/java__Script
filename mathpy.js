console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);

const des =Object.getOwnPropertyDescriptor(Math,'PI');
console.log(des);
