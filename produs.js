var data;
var index = localStorage.getItem("selectedItems");
fetch("/data.json")
.then((response) => response.json())
.then((jsonData) =>{
    data = jsonData;
    display(data);
});
// localStorage.clear();
function display(showItem){
var items = document.createElement("div");
items.classList.add("row","p-4");
items.innerHTML =`
<div class="col-lg-6 col-sm-12 item">
<img src="${showItem[index].image}">
</div>
<div class="col-lg-6 col-sm-12 item">
<h3 class="display-6">${showItem[index].title}</h3>
<p>£${showItem[index].price}</p>
<p>${showItem[index].description}</p>
<a   class="btn btn-lg btn-primary" href="cart.html">add</a>
</div>
`
container.appendChild(items);
};
var container = document.getElementById("items");

var indexuri = JSON.parse(localStorage.getItem("itemsCard"))||[];

indexuri.push(index);
localStorage.setItem("itemsCard",JSON.stringify(indexuri));
