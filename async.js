

function getUsersFromInstagram(cb){

    // got to db
    // fetch al users

    const users = [{name: "James"}, {name: "Peters"},{name: "James"}];
    console.log(users)
    console.log('all users gotten')

    return users;
    // so instead of this function to return wwith all the users, we pass the users to the callback function
    // cb(users)
}

function seeUserPost(user){
    // do som other codes
    const post = [{post1: "First Post"}, {post2: "Second Post"}];
    console.log(user,` post:`,post);
    
}
console.log('getting all users');
setTimeout(()=>{
    const users = getUsersFromInstagram()
    console.log(users[1])
    const user1 = users[1].name

    // then we want to get a a particular user and see all his posts
    console.log('getting', user1, "post")
    setTimeout(()=>{

        seeUserPost(user1)
    },20000)

},10000)