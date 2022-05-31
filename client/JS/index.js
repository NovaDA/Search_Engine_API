const btn = document.querySelector('#search-input')
const searchCriteria = document.querySelector('#searchTxt');
const btns = null;

btn.addEventListener('click', message)

btns.forEach(element => {

    element.addEventListener('click', () =>{
        console.log("Working");
    })
    
});

function message(e){
    e.preventDefault();
    console.log(searchCriteria.value)
    setUrl(searchCriteria.value)
    btns = document.querySelectorAll('#btn-input');
}
