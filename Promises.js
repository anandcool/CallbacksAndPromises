const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => { 
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
        console.log("hello");
    }, 1000);
}

function createPosts(post) {
    console.log(post);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error)
                resolve();
            else
                reject('Error:Something goes wrong');
        }, 2000)
    });
}



createPosts({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>{console.log(err)})     

// Promise.all
const promise1 = Promise.resolve('Hello World!!!');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'good');
});
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1');
Promise.all([promise4]).then(values=>console.log(values))
const promise5 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json());
Promise.all([promise5]).then(values=>console.log(values))

//Async Await Ways
async function init() {
    await createPosts({ 'title': 'Post Three', 'body': 'This is Post Three' });
    getPosts();
}
init();

// Fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

