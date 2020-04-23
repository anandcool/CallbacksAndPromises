const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
]

function getPosts(){
    setTimeout(()=>{
        console.log("ji")
        let output = '';
        posts.forEach(function (ayush){
            output += `<li>${ayush.title}</li>`
        })
        document.body.innerHTML = output;
    },1000);
}


function createPosts (post,callbacks){
    setTimeout(()=>{
        posts.push(post);
       callbacks();
    },2000)
}

console.log("hi thiss");
createPosts( {title:'Post Three',body:'This is post three'});
getPosts();
// To handle this situation callbacks created

createPosts( {title:'Post Three',body:'This is post three'},getPosts);
