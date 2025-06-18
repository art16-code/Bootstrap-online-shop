fetch("/data.json")
.then((response) =>response.json())
.then((jsonData) =>{
    const data = jsonData;
})
.catch((error) =>console.log(error));