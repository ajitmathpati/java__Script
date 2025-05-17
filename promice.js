// const promiseone = new Promise((resolve, reject) => {

//     //do any async task
//     //dbcall,creptography,netwoek 
//     setTimeout(() => {   this is called async 
//         console.log('hi ajit');
//         resolve()

//     }, 3000);

// })
// promiseone.then(() => {
//     console.log(" promise consume");

// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('HI I AM MATHPATI');
//         resolve()

//     }, 1000);
// }).then(() => {
//     console.log('async 2 resolve');

// })

const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hi ');
        resolve({ name: "ajit ", email: "ajit mathpatii 211@ gmail.com" })

    }, 1000);

})
promisethree.then(({ name ,email }) => {
    console.log(name ,email);


})