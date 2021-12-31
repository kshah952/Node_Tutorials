var count = (data) => {
    c = 0;
    data.forEach(element => {
        c = c + 1;
    });
    console.log("Count!!");
    return data;
}
count([1,2,3,4]);