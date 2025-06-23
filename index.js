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
  <img src="./imagini/copii sh1.jpg" >
  <img src="${element.image}" class="custom-card-img">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
   
    <a href="produs.html" class="btn btn-primary">View more</a>
  </div>
</div>`
containerClothes.appendChild(items);
console.log(element.imagine);
    })
  
};
var women =document.getElementById("women");
var men = document.getElementById("men");
var kids = document.getElementById("kids");
women.addEventListener("click", function(){

});

