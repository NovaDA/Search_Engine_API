
const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true';

//search is now working  this is second way fetching from api 

function search(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '01e7be827fmshdc10eebfd845863p1f733bjsn67e76cc5fd78'
        }
    };
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=luffy&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(json => {
        let data1 = "";
                json.map((values) => {
                    data1 += `<div class="card">
                    <h1 class="title">${values.title}</h1>
                    <img src="${values.image}" alt="img"  class="img-result">
                    <p>${values.description}</p>
                    <p class="catergory">${values.url}</p>
                    <p class="price">${values.title}</p>
                </div>`
                })
                document.getElementById("cards").innerHTML = data1;
    })
	.catch(err => console.error(err));

}



module.exports = {
    search,
}




