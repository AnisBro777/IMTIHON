let CardWrapper = document.querySelector(".card__wrapper")
let elTemplate = document.querySelector("#template").content

function renderArr(arr, list) {
    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        cloneTemplate.querySelector("img").src = item.thumbnail
        cloneTemplate.querySelector("h4").textContent = item.title
        cloneTemplate.querySelector("h5").textContent = item.price + " $  "
        cloneTemplate.querySelector("h6").textContent = item.stock + " - sales  " + item.rating + " + "


        list.appendChild(cloneTemplate)
    })
}

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

function fetchData(){
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(users => renderArr(users.products, CardWrapper))
}

fetchData()