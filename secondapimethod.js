fetch(' https://randomuser.me/api/')
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        return data.results[0];


    })
    .then((result) => {
        console.log(result.email);
        


    })
    .catch((E) => {
        console.log("E:", E);


    })