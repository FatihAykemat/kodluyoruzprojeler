let posts = [{
    title: 'Computer',
    body: 'MacBook',
    author: 'Pro'
},
{
    title: 'Computer',
    body: 'Monster',
    author: 'Tulpar'
}
];

let newPost = {
title: 'Mouse',
body: 'Logitech',
author: 'G402'
};


const listPost = (data) => {
return new Promise((resolve, reject) => {
    console.log('postlar listeleniyor...');
    if (data) {
        console.log('listeleme başarılı');
        resolve(posts);
    } else {
        reject('postlar listelenemedi!');
    }
});
};

const addPost = (newPost) => {
return new Promise((resolve, reject) => {
    console.log('post ekleniyor...');
    if (newPost) {
        posts.push(newPost);
        resolve('ekleme başarılı');
    } else {
        reject('ekleme başarısız!');
    }
});
};

const processPost = async() => {
try {

    let listedPosts = await listPost(true);
    console.log(listedPosts);
    console.log('*******************************************************');

    let isAdded = await addPost(newPost);
    console.log(isAdded);

    listedPosts = await listPost(true);
    console.log(listedPosts);

} catch (err) {
    console.log(err);
}
}

processPost();