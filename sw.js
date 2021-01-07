self.addEventListener("install",e =>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
            "public.html", 
            "style.css",
            "index.js",
            "img/logo192.png"])
        })
    )
})


self.addEventListener("fetch", e =>{
    console.log(`hello world${e.request.url}`)
})