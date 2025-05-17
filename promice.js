const promiseone = new Promise((resolve, reject) => {

    //do any async task
    //dbcall,creptography,netwoek 
    setTimeout(() => {
        console.log('hi ajit');
        resolve()

    }, 3000);

})
promiseone.then(() => {
    console.log(" promise consume");

})