
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
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(response => console.log(response.value))
	.catch(err => console.error(err));
}

module.exports = {
    search,
}