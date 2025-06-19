var data;
fetch("/data.json")
.then((response) =>response.json())
.then((jsonData) =>{
 data = jsonData;
 display(data);
 
})
.catch((error) =>console.log(error));
var containerClothes = document.getElementById("container-clothes");
function display (data){
    data.forEach(element => {
        var items = document.createElement("div");
        items.classList.add("col-lg-3", "col-md-4","col-sm-6")
       items.innerHTML = `<div class="card>
  <img src="${element.imagine}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
   
    <a href="produs.html" class="btn btn-primary">View more</a>
  </div>
</div>`
containerClothes.appendChild(items);
console.log(element.imagine);
    });
  
};
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/

