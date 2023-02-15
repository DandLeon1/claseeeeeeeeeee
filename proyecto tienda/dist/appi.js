'use strict'

fetch ("https://jsonplaceholder.typicode.com/todos")
.then((response)=> response.json())
/* para hacer peticiones

 fetch-> js
 axios-> libreria
requst url

*/
.then((json)=>{
    for (let obj of json){
        console.log(obj);
    }
})
.catch((error)=> console.error(error))
.finally(console.info("a finalizado la peticion"));
