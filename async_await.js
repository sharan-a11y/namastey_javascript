const p = new Promise((resolve,reject) => {
    resolve("Promise Resolved Value!!");

});

function getData(){
    p.then((res) => console.log(res));
}
getData();