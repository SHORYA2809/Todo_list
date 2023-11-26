let inputBox = document.getElementById('todoInput');
let todoContainer = document.getElementById('list_container');

// console.log(inputBox);
// console.log(todoContainer);


//adding Todo

function addTodo(){
    
    let val =inputBox.value;
    if(val.length!=0)
    {
         let newTodo =document.createElement("li");
         newTodo.innerHTML=val;
         let span = document.createElement("span");
         span.innerHTML="\u00d7";
         newTodo.appendChild(span);
         todoContainer.appendChild(newTodo);
    }
    else{
         alert("Add a Task");
    }

}


//check and uncheck and remove;
todoContainer.addEventListener("click",function(e){
  
     if(e.target.tagName=="LI"){
         e.target.classList.toggle("checked");
     }
     else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
     }
     
    //  console.log(e.target.tagName);
    
})
