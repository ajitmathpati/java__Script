

// const MyPromise = new Promise((resolve, reject) => {


//     setTimeout(() => {
//         let error = 0;
//         if (!error) {
//             resolve({ name: "ajit", email: "ajitmathpati211@gmail.com" })
//         }
//         else {
//             reject("some error to feching data");
//         }


//     }, 1000)
//     //how to use try catch
//     //promise is a object
// })
// async function consumepromise() {
//     try {

//         const response = await MyPromise
//         console.log(response);
//     } catch (error) {
//         console.log( error);



//     }


// }
// consumepromise()



async function getalluser() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data.name);


    } catch (error) {
        console.log('E:', error);


    }


}
getalluser()