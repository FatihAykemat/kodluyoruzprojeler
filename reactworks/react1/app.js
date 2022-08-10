import  getData  from "./getData.js";

getData(10)
    .then(data => console.log(data))
    .catch(e => console.log(e))