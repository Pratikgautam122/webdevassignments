// Task 1: Callback

function getUserById(id, callback) {
    setTimeout(() => {
        // return user after 2 seconds
        callback({ id: id, name: "Ram" });
    }, 2000);
}

// call function
getUserById(1, (user) => {
    console.log("User name:", user.name);
});


// Task 2: Callback Hell

function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: 1, name: "Ram" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}

// nested callbacks
getUser((user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0], (comments) => {
            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        });
    });
});


// Task 3: Promises

function getUserPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Ram" });
        }, 1000);
    });
}

function getPostsPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getCommentsPromise(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

// promise chaining
getUserPromise()
    .then((user) => {
        console.log("User:", user);
        return getPostsPromise(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return getCommentsPromise(posts[0]);
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// Task 4: Async / Await

async function showData() {
    try {
        const user = await getUserPromise();
        const posts = await getPostsPromise(user.id);
        const comments = await getCommentsPromise(posts[0]);

        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}

// call async function
showData();
