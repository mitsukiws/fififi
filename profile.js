let url = "https://my-json-server.typicode.com/Bsenichak/WebMiddleDB/"

let params = new URLSearchParams(window.location.search)
let id = params.get("id")

fetch(url + "users?id=" + id).then(r=>r.json()).then(d=>{
    let {name, surname, photo_url, balance} = d[0]
   document.querySelector("main").innerHTML = 
   `
   <h1>${name} ${surname}</h1>
   <img src="${photo_url}">
   <p>Balance: ${balance}</p>
   `
})

