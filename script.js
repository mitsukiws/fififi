let url = "https://my-json-server.typicode.com/Bsenichak/WebMiddleDB/"

fetch(url + "products").then(r=>r.json()).then(d=>{
    d.forEach(p => {
        let {id, name, description, price, seller_id, photo_url} = p
        let product = document.createElement("div")
        product.classList.add("product")
        product.innerHTML = `
        <h3>${name}</h3>
        <img src="${photo_url}">
        <p>Price: ${price}</p>
        <p>Description ${description}</p>
        <a href="userProfile.html?id=${seller_id}">Seller profile</a>
        `
        document.querySelector("main").append(product)
        
    });
})