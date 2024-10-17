
function executor(resolve, reject){
    setTimeout(() => {
        const isRejected = false;

        if(isRejected){
            reject("rejected");
        } else {
            resolve("resolve");
        }
    }, 5000);
}


const promise = new Promise(executor);
promise
    .then((value) => console.log("Fullfill with value: ", value))
    .catch((reason) => console.log("Rejected with ", reason))
    .finally(console.log("Finally executed"));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);