const list = [
  { name: "sync", age: 9 },
  { name: "hruthika", age: 10 }
];
//SYNCRONUS
function createpostSync(post, callback) {
  setTimeout(() => {
    list.push(post);
  }, 2000);
  callback();
}
function getpostSync() {
  setTimeout(() => {
    let y = "";
    list.forEach(
      (post) => (y += `<div style="display:block;">${post.name}</div>`)
    );
    document.getElementById("s").innerHTML += y;
  }, 1000);
}
createpostSync({ name: "thothi-sync", age: 1 }, getpostSync);

//ASYNCRONUS
const lista = [
  { name: "async", age: 9 },
  { name: "hruthika", age: 10 }
];
function createpostAsyc(post, callback) {
  setTimeout(() => {
    callback();
    lista.push(post);
  }, 400);
}
function getpostAsyc() {
  setTimeout(() => {
    let y = "";
    lista.forEach(
      (post) => (y += `<div style="display:block;">${post.name}</div>`)
    );
    document.getElementById("a").innerHTML += y;
  }, 100);
}
createpostAsyc({ name: "thothi-Asyc", age: 1 }, getpostAsyc);

//PROMISE
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function createPostpr(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      //const error = false;

      // if(!error) {
      resolve();
      // } else {
      //   reject('Error: Something went wrong');
      // }
    }, 200);
  });
}

function getPostspr() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("p").innerHTML += output;
  }, 100);
}

createPostpr({ title: "Post Three", body: "This is post three" }).then(
  getPostspr
);
//.catch(function(err) {
//  console.log(err);
//});

// TEST with PROMISE

const listp = [
  { name: "test", age: 9 },
  { name: "hruthika", age: 10 }
];
function createpost4(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      listp.push(post);
      let x = true;
      if (!x) resolve();
      else reject("ERROR");
    }, 500);
  });
}
function getpost4() {
  setTimeout(() => {
    let y = "";
    listp.forEach(
      (post) => (y += `<div style="display:block;">${post.name}</div>`)
    );
    document.getElementById("t").innerHTML += y;
  }, 300);
}

createpost4({ name: "thothi -test", age: 1 })
  .then(getpost4)
  .catch(function (err) {
    document.getElementById("t").innerHTML =
      err + "(make x(error) as false in if to display correct answer";
  });
