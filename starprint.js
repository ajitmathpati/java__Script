const star = () => {
    for (let i = 0; i < 6; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        console.log(str);

    }
}
star();