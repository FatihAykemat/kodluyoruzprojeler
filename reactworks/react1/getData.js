import axios from "axios";

export default async function getData(user_id){
    try{
        const {data: userInfos} = ( await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`));
        console.log("USER", userInfos)


        const {data: userPosts} = ( await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`));
        console.log("POSTS", userPosts)
    }catch(e){
        console.log("HATA: " , e)
    } 
}