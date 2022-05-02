// write js code here corresponding to matches.html


var arr = JSON.parse(localStorage.getItem("schedule"));
var fav = JSON.parse(localStorage.getItem("favourites")) || [];

sudipta(arr);

document.querySelector("#filterVenue").addEventListener("change",fff)

function fff(){

var sel = document.getElementById("filterVenue").value;


var fl = arr.filter(function(elem){

    return elem.venue == sel ; 
})
    sudipta(fl)
    
}



function sudipta(arr){

arr.forEach(function(elem){
 // document.querySelector("tbody").innerHTML = '';

var tr = document.createElement("tr");

var td1 = document.createElement("td");
td1.innerText=elem.matchNum;

var td2 = document.createElement("td");
td2.innerText=elem.teamA

var td3 = document.createElement("td");
td3.innerText=elem.teamB

var td4 = document.createElement("td");
td4.innerText=elem.date 

var td5 = document.createElement("td");
td5.innerText=elem.venue 

var td6 = document.createElement("td");
td6.innerText= "Favourite";
td6.style.color='green'
td6.addEventListener("click",function(){

    fevour(elem);
})

tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr);
})

}

function fevour(elem){

     fav.push(elem);
     localStorage.setItem("favourites",JSON.stringify(fav));
    // console.log(elem);
}
