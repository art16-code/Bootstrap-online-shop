var data;
fetch("/data.json")
.then((response) => response.json())
.then((jsonData) => {
    data = jsonData;
    display(data); 
})
.catch((error) => console.log(error));

var containerClothes = document.getElementById("container-clothes");

function display(data) {
    containerClothes.innerHTML = "";
    data.forEach((element,index) => {
        var items = document.createElement("div");
         items.setAttribute("data-index",index);
        items.classList.add("col-lg-3", "col-md-4", "col-sm-6","item-card");
        items.innerHTML = `
            <div class="card">
                <img src="${element.image}" class="custom-card-img">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <p class="card-price">$${element.price}</p>
                    <a href="produs.html" class="btn btn-primary">View more</a>
                </div>
            </div>`;
        containerClothes.appendChild(items);
    });
    var card = document.getElementsByClassName("item-card");
    Array.from(card).forEach(card =>{
        card.addEventListener("click", function(){
        localStorage.setItem("selectedItems",this.getAttribute("data-index"));
        })
    })

    

}

var women = document.getElementById("women");
women.addEventListener("click", function() {
    var filteredData = data.filter(item => item.category === "women");
    display(filteredData);
});
var men = document.getElementById("men");
men.addEventListener("click", function(){
  var filteredData = data.filter(item => item.category==="men");
  display(filteredData);
});
var kids = document.getElementById("kids");
kids.addEventListener("click", function(){
  var filteredData = data.filter(item => item.category==="kids");
  display(filteredData);
});

var searchInput = document.getElementById("search");
var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    const filteredItems = data.filter(item => 
        item.title.toLowerCase().includes(query)
    );
    display(filteredItems);
});


