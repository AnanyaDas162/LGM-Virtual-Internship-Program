var count = 0;
function notificationAdd(){
    const list = document.createElement("li");//Creating List element
    const underline = document.querySelector(".under-line");//Accessing the Parent element
    list.classList.add('doing-list');// ADDING THE CHILD ELEMENT
    const y = document.getElementById("input-container");//Accessing the input
    const input = y.value;
    console.log(input);
    list.innerHTML = input;// Setting the input object to the object list
    list.id = count;
    count ++;
    if (y.value.trim().length != 0){//If the user input is not blank or spaces
        underline.value=underline.appendChild(list)+underline.value;//Appending the Child to the parent
    }
    else{
        window.alert("Please give a valid task.");// Else giving alert
    }
}
/*function notification_delete(event){//Not Done +_+
   const y = document.querySelectorAll(".doing-list");
   y.style.color = "red";
}*/
/*var current_task = document.querySelectorAll('.delete-button');
for (var i = 0; i < current_task.length; i ++){
current_task[i].onclick= function(){
    this.parentNode.remove();
}
}
var task = document.querySelectorAll(".doing-list");
for (var i = 0; i < task.length; i ++){
    task[i].onclick = function(){
        this.classList.toggle('completed');
    }
}*/
function notification_delete(evt) {
    // evt.target refers to the clicked <li> element
    // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
    if (evt.target.style.textDecoration == 'line-through'){
        evt.target.style.textDecoration = 'none';
        evt.target.style.backgroundColor = 'whitesmoke';
        evt.target.style.color = 'black';
    }
    else{
        evt.target.style.textDecoration = 'line-through';
        evt.target.style.backgroundColor = 'red';
        evt.target.style.color = 'white';
    }
  }
 
function allDelete(){
    const ele = document.querySelector(".under-line");//Accessing the ul element
    ele.innerHTML="";// The innerHtml part of the ul element is null
}
function menuAdd(){
    var menuList = document.getElementById("menu-list");//Accessing the div --> menu-list where the menus are stored
    if (menuList.style.display == "none"){// On clicking the nav bar, if the menu-list is not displayed 
        menuList.style.display = "block";//Then display as a block
    }
    else{
        menuList.style.display = "none";//And if it is already displaying then on clicking the nav bar set the display to none
    }
}
