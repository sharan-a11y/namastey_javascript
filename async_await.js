const p = new Promise((resolve,reject) => {
    resolve("Promise Resolved Value!!");

});

async function handlePromise (){
    const val = await p;
    console.log(val);
}

handlePromise();

// function getData(){
//     p.then((res) => console.log(res));
// }
// getData();