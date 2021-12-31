var count = (data) => {
    c = 0;
    data.forEach(i => {
        c = c + 1;
    });
    console.log("Count!!",data);
}
count([1,2,3,4]);