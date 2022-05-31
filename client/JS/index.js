const btn = document.querySelector('#search-input')
const searchCriteria = document.querySelector('#searchTxt');

btn.addEventListener('click', message)

function message(e){
    e.preventDefault();
    console.log(searchCriteria.value)
    setUrl(searchCriteria.value)
    //search();
}
