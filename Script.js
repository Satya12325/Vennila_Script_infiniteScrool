const result = document.getElementById("News")
const div = document.getElementById("topDiv");
const loadNews = async () => {
    // const div = document.getElementById("topDiv");
    try {
        
        const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GDAa8Q5zaHgOlIfQW4PYAUgGV5yfQZs6`)
        const data = await res.json();
        console.log(data);
        Newses(data);
        // const debouncedCallback = debouncer(()=>fn(div.appendChild(result),"load"),500)
        // div.addEventListener("scroll",debouncedCallback)
        // Newses(data,"load");
      
}
    catch (err) {

    }
}


function Newses(data) {
   
    result.innerHTML = "";
    result.innerHTML=data.results.books.map((item)=>{
        return `
        <div class="card">       
         <img src="${item.book_image}" alt="Denim Jeans" style="width:100%">
         <p>${item.description}</p>
         <p></p>
      </div>
        `
        
    })
}


// const loadNews = async () => {
//     try {

//         const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
//         const data = await res.json();
//         console.log(data);
//         Newses(data);
//         const debouncedCallback = debouncer(()=>fn(h1,"load"),500)
//         h1.addEventListener("scroll",debouncedCallback)
//         Newses(data,"load");
//     }
//     catch (err) {

//     }
// }


// function Newses(data) {
//     const result = document.getElementById("News")
//     result.innerHTML = "";
//     result.innerHTML=data.results.map((item)=>{
//         return `
//         <div class="card">       
//          <img src="${item.multimedia[0].url}" alt="Denim Jeans" style="width:100%">
//          <p>${item.abstract}</p>
         
//       </div>
//         `
        
//     })
// }



loadNews();

// window.addEventListener("scroll",()=>{
//     
//     const fn = ()=>{
    
//         loadNews();
//    }
//     const debouncedCallback = debouncer(()=>fn(),500)
//     div.addEventListener("scroll",debouncedCallback);
//     loadNews();
// })
{/*  */}

window.addEventListener("scroll",()=>{
    // const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    // if(scrollTop+clientHeight >= scrollHeight ){
    //    console.log("scroll")
    //     loadNews()
    // }
    
   
    console.log("scroll")
    // 
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadNews()
    }
    
})