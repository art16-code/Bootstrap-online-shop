var submit = document.getElementById("submit");
var mail = document.getElementById("email");
var phone = document.getElementById("Phone-number");
 var names = document.getElementById("Name");
var flatt = document.getElementById("flat-number");
var housee = document.getElementById("House-number");
 var  streets = document.getElementById("street");
 var cities = document.getElementById("city");
 var select = document.getElementById("sel");


submit.addEventListener("click", function(e){
    
if(verif(mail.value,phone.value,streets.value,cities.value,housee.value,flatt.value,names.value,select.value)){

}else{
 e.preventDefault();

}
})
function verif(email,number,street,city,house,flat,name,payment){
var valid = true;
if(email.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    && email.length!=""){
    mail.classList.remove("border-danger")
} else{
    mail.classList.add("border-danger")
    valid = false;
};
if(number.match(/^\+?[1-9]\d{1,14}$/)&& number.length!=""){
    phone.classList.remove("border-danger");
}else{
    phone.classList.add("border-danger")
    valid = false;
};
if (flat.match(/^[a-zA-Z0-9\s\-\/\.]+$/)&& flat.length !=""){
    flatt.classList.remove("border-danger");
} else{
    flatt.classList.add("border-danger")
    valid = false;
};
if(house.match(/^[a-zA-Z0-9\s\-\/\.]+$/)&& house.length !=""){
    housee.classList.remove("border-danger");
}else{
    housee.classList.add("border-danger")
    valid = false;
};
if(street.length !=""&&street.match(/^[a-zA-Z\s\-\.']+$/)){
    streets.classList.remove("border-danger")
    
}else{
    streets.classList.add("border-danger")
    valid = false;
};
if(city.length !=""&&city.match(/^[a-zA-Z\s\-\.']+$/)){
    cities.classList.remove("border-danger");

}else{
    cities.classList.add("border-danger")
    valid = false;
}
if(name.length !=""){
    names.classList.remove("border-danger");
}else{
    names.classList.add("border-danger")
    valid = false;
};
if(payment!="Select payment method"){
    select.classList.remove("border-danger")

}else{
    select.classList.add("border-danger")
    valid = false;
}






return valid;

};

