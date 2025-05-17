async function getalldata() {
    try {
        const response = await fetch(' https://randomuser.me/api/')
        const data = await response.json()
        const namedata = data.results[0].picture.large
        console.log(namedata);


    } catch (error) {
        console.log("E:", error);


    }
}
getalldata()