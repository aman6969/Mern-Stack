// Date
let myDate = new Date();
console.log(myDate);   // -> Show the date 
console.log(myDate.getDate())
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getHours())

let elemClass = document.getElementsByClassName('container');
console.log(elem);
elem[0].style.background = "yellow";
elemClass[0].classlist.add('bg');
elemClass[0].classlist.remove('bg');

let tn = document.getElementsByTagName("div");
console.log(tn);
createdElement = document.createElement("p");
createdElement("p");
createdElement.innerText="This is a created ppppp"
tn[0].appendchild(createdElement);
function Clicked(){
    console.log("button was clicked");
}
window.onload = function(){
    console.log("Reloaded");
}
//set time interval
logkaro = ()=>{
    console.log("wait 2 sec");

}
setTimeout(logkaro,2000);
setInterval(logkaro, 2000);
