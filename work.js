function check() {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    //console.log(store);
    //// Title validation////
    if (title == "" ) {
            document.getElementById("error").innerHTML = "Title must required";
            return false;
    }
    else if (title.length > 30 ) {
        document.getElementById("error").innerHTML = "words are less then 30";
        return false;
    }
    /// desc validation///
    if (desc.length > 500 || desc.length <= 0) {
        document.getElementById("error3").innerHTML = "Words are < 500";
        return false;
    }
    //// price validation////
    if (price == "") {
        document.getElementById("error2").innerHTML = "Price must required";
        return false;
    }
    else if (price > 1000) {
        document.getElementById("error2").innerHTML = "digits are < 1000 & > 0";
        return false;
    }
    else if (price <= 0) {
        document.getElementById("error2").innerHTML = "price are not negative";
        return false;
    }
    else if (isNaN(price)) {
        document.getElementById("error2").innerHTML = "enter digits";
        return false;
    }
    remove();
    //logKeyCode(event);
    //console.log("Hello");
    return true;
}
////// title field only alphabets///////
///// A-Z : use 65-------90
///// a-z : use 97-------122
///// 32,8,9-------------space bacspace,tab......
function IsCharacter(event) {
    let title = document.getElementById('title').value;
    title = event.keyCode;
    // console.log(title);
    if (title !== !(title >= 65 && title <= 90) && !(title >= 97 && title <= 122) && (title != 32 && title != 8) && (title != 9) && (title != 46)) {
        return false;
    }
    return true;
    //console.log("Hello");
}
//// price field point///
function IsCharacter1(event) {  
     let price = document.getElementById('price').value;
     price = event.keyCode;
   if (price == 46 || (price>48 || price<57)) {  
    return true;  
    }  
 return false;  
 }  
//////////////////////////////////////////////////////////validation complete/////////////////////////////////////////////////////////////////
//// make cards////
const array = [];
function call() {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    // alert('----')
    // console.log(t);
    // console.log(p);
    // console.log(d);
    let obj1 = {
        id:array.length+1,  
        title: title,
        desc: desc,
        price: price,
        comment:[]
    };
    //console.log(obj1);
    if (check()) {
        //alert('-=-=')
        array.push(obj1);
        console.log(array);
        call1();
    }
    //console.log(array)
}
function call1() {
let data1 = "";
array.map((value,index) => {
data1 +=  `<div  class="card" id="card1${index}"> 
<i class="fa-solid fa-ellipsis-vertical" onclick="select(this.id)" id="${index}"></i>
<p>ID: ${value.id}</p>
<h3 id="titles"> TITLE</h3>
<p>${value.title}</P>
<h3 id="descc"> DESCRIPTION</h3>
<p> ${value.desc} </p>
<h3 id="prices">PRICE</h3>
<p> ${value.price}</p>
<div id="like${index}" class="like5">
<i class="fa-regular fa-thumbs-up" id="${index}" onclick="like(this.id)"></i>
<i class="fa-solid fa-message" onclick="commnetshow(this.id)" id='${index}'></i>
</div>
<div class="comments" id="comment${index}">
    <input type="text" name="" id="commentdata${index}">
    <i class="fa-solid fa-message" onclick="Comments(this.id)" id='${index}'></i>
</div>
<div id="comment2${index}">
</div>
<div class="s" id="see${index}">
<p id="${index}" onclick="edit(this.id)">EDIT </p>
<p id="${index}" onclick="view(this.id)" > VIEW</p>
<p id="${index}" onclick="del(this.id)">DELETE</p>
</div>
</div>
<div class="v" id="view">
    <h3 id="t"> TITLE</h3>
    <h3 id="d"> DESCRIPTION</h3>
    <h3 id="p">PRICE</h3>
    <h3 id="c"> Comments</h3>
</div> `;
    });
document.getElementById("cards").innerHTML = data1;
}
function remove() {
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
     document.getElementById('price').value = '';
     document.getElementById("error").innerHTML = "";
     document.getElementById("error2").innerHTML = "";
 }
 function like(index) {
    //=let clicked = false;
   let count1=document.getElementById("like"+index);
   //     if (!(clicked)) {
   //                     clicked = true;
   //      count1.textContent++;
   // }
   if(count1.style.color === "white"){
        count1.style.color = "blue";
    }
     else {
         count1.style.color = "white";
                     } 
               }   
 function commnetshow(index){
  let c=document.getElementById('comment'+index)
  if (c.style.display === 'block') {
    c.style.display ='none'
  }
  else{
    c.style.display ='block'
  }
}
function Comments(index) {
    var comm=document.getElementById('commentdata'+index).value;
    
            array[index].comment.push(comm);
            let data='';
    array[index].comment.map((value)=>{
        data +=`<p>${value}</p>`
    
    })
 document.getElementById('comment2'+index).innerHTML=data;
}
function select(index){
let c=document.getElementById('see'+index);
//console.log(c);

if (c.style.display === 'block') {
 c.style.display ='none'
    }
else{
 c.style.display ='block'
    } 
}
function del(index){
let out=document.getElementById("card1"+index);
out.remove(index);
let value="DO YOU WANT TO DELETE this card";
if(confirm(value) == true){
value="yes";
}
else{
value="No";
}
}
var value='';
function edit(index){
let title = document.getElementById("title").value;
let price = document.getElementById("price").value;
let desc = document.getElementById("desc").value;
//console.log(title);
//console.log(desc);
//console.log(price);    
let title1=array[index].title;
let desc1=array[index].desc;
let price1=array[index].price;
//console.log(title1);
//console.log(desc1);
//console.log(price1);
document.getElementById("title").value=title1;
document.getElementById("desc").value=desc1;
document.getElementById("price").value=price1;
let update=document.getElementById("up");
//console.log(update);
let add=document.getElementById("ad");
//console.log(add);
if(update.style.display === "block")
{ 
      update.style.display = "none"
}
else{
    update.style.display = "block";
    add.style.display="none";    
}
}
function update(){
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    //console.log(title);
    //console.log(desc);
    //console.log(price);    
document.getElementById("titles"+value).innerHTML=title;
document.getElementById("descc"+value).innerHTML=desc;
document.getElementById("prices"+value).innerHTML=price;
}
function view(index){
    document.getElementById("view").style.display='block';
    let title1=array[index].title;
    let desc1=array[index].desc;
    let price1=array[index].price;
    let comments=array[index].comment;
    console.log(title1);
    console.log(desc1);
    console.log(price1);
    document.getElementById("t").innerHTML=title1;
    document.getElementById("d").innerHTML=desc1;
    document.getElementById("p").innerHTML=price1;
    document.getElementById("c").innerHTML=comments;
}
//// check char code//////////
// function logKeyCode(event){
//    const keyCode = (event.which) ? event.which : event.keyCode;
//     console.log('keyCode =',keyCode);
//    if(keyCode<97 && keyCode>122){
//       console.log('keyCode . detected');
//       alert('keyCode . detected');
//    }
// }
/// call in input tag/////
// onkeypress="logKeyCode(event)"
