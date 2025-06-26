var data;
var index = localStorage.getItem("selectedItems");
fetch("/data.json/")
.then((response) => response.json())
.then((jsonData) =>{
    data = jsonData;
    display(data);
});
localStorage.clear();
function display(showItem){
var items = document.createElement("div");
items.classList.add("row");
items.innerHTML =`
<div class="col-lg-6 col-sm-12">
<img src="${showItem[index].image}"
</div>
<div class="col-lg-6 col-sm-12"></div>
`
}