
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

//async /await

async function getUserInfo() {
    let res = 0;
    for(let i=0; i < 1000; i++){
        for (let j=i; j < 1000; j++){
            continue;
        }
    }

    //simulare eroare in timpul executiei
        throw new Error("Promise rejected");
       return {email: "test@test.com"};
}

const userInfo = getUserInfo();
userInfo.then(info => console.log("userInfo in then ", info));
console.log("promise: ", userInfo);
console.log("operation after calling asygn function");

async function main() {
    console.log("operations befor calling async function");
    let ui = null;
    try{
        ui = await getUserInfo();
    }catch(e) {
        console.log("rejected with: ", e);
    } finally {
        console.log("new Finally executed");
    }

    console.log("ui ", ui);
    console.log("operations after calling async function");
}
main();

//fetch

const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsEndpoint = '/posts';
const todosEndpoint = '/todos';

const postsURL = baseUrl + postsEndpoint;
const todosURL = baseUrl + todosEndpoint;

fetch(postsURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(reason => console.log('error when fetching data: ', reason))
    .finally(() => console.log('done procesessing request'));


async function processPosts() {
    const response = await fetch(postsURL);
    const data = await response.json();
    console.log('data in async await: ', data); 

    const postsContainer = document.querySelector('main');

    for (const post of data) {
        const postContainer = document.createElement('article');
        postContainer.innerHTML = `<h3>${post.title}</h3> <p>${post.body}</p>`;
        postsContainer.appendChild(postContainer);
    }
}



async function processTodos() {
    const response = await fetch(todosURL);
    const data = await response.json();
    console.log('data in async await: ', data); 

    const todosContainer = document.querySelector('main');

    for (const todo of data) {
        const todoContainer = document.createElement('article');
        todoContainer.innerHTML = `<h3>${todo.title}</h3> <input type="checkbox" ${todo.completed ? 'checked' : ''}>`;
        todosContainer.appendChild(todoContainer);
    }
}



async function processData() {
    await processTodos();
    await processPosts();
    
}

processData();