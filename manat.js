var value_input=document.getElementById("value");
var btn = document.getElementById("btn");
var conntainer=document.getElementById("container");
var arr = [500,200,100,50,20,10,5,1];


btn.addEventListener("click",()=>{
    conntainer.textContent=" "
    var value=value_input.value


for (let i=0; i< arr.length;i++){

if (value/arr[i]>=1){
var g=Math.trunc(value/arr[i])
value=value-(arr[i]*Math.trunc(value/arr[i]))

var line =document.createElement("div");
line.classList.add("line");
conntainer.append(line);


for(let k =0; k < g;k++){
    console.log(k);
    var money = document.createElement("div");
    money.classList.add("money")
    money.style.zIndex=`${k}`
    money.style.left=`${k*60}px`
    line.append(money);
    var image=document.createElement("img");
    money.append(image)
    image.src=`${arr[i]}.jpg`




}
}}

console.log("hello")

})