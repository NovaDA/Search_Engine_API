
// const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true';
// const url =`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${text}&pageNumber=1&pageSize=10&autoCorrect=true`;


//search is now working  this is second way fetching from api 
function setUrl(text){
    const url =`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${text}&pageNumber=1&pageSize=10&autoCorrect=true`;
    search(url);
}
function search(url){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '01e7be827fmshdc10eebfd845863p1f733bjsn67e76cc5fd78'
        }
    };
    fetch(url, options)
	.then(response => response.json())
	.then(response => {
        let data1 = "";
                response.value.map((values) => {
                    data1 += `<div class="card">
                    <h1 class="title">${values.title}</h1>
                    <p>${values.description}</p>
                    <a href="${values.url}">${values.url}</a>
                </div>`
                })
                document.getElementById("cards").innerHTML = data1;

    console.log(response.value[0])})
	.catch(err => console.error(err));

    // fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => {
    //             let data1 = "";
    //             json.map((values) => {
    //                 data1 += `<div class="card">
    //                 <h1 class="title">${values.title}</h1>
    //                 <img src="${values.image}" alt="img"  class="img-result">
    //                 <p>${values.description}</p>
    //                 <p class="catergory">${values.category}</p>
    //                 <p class="price">${values.price}</p>
    //             </div>`
    //             })
    //             document.getElementById("cards").innerHTML = data1;
            
    //         }).catch((err)=>{
    //             console.log(err);
    //         })
}



module.exports = {
    setUrl,
    search,
}




