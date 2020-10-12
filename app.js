

var list = document.getElementById("myList");
console.log(list);

function addTodo(){

    // getting value from input text
    var val = document.getElementById("val");

    // adding value to the list
    var list_item = document.createElement("li");
    var todo = document.createTextNode(val.value);
    list_item.appendChild(todo);

    // creating Edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick","editTodo(this)");
    editBtn.appendChild(editText);

    // creating delete button
    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.setAttribute("onclick","deleteTodo(this)")
    deleteBtn.appendChild(deleteText);


    // adding elements to list
    list.appendChild(list_item);
    list_item.appendChild(editBtn);
    list_item.appendChild(deleteBtn);

    val.value="";

}

function deleteAll(){
    list.innerHTML="";

}

function editTodo(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editedVal = prompt("Edit Value",val);

    e.parentNode.firstChild.nodeValue = editedVal;

}

function deleteTodo(e){
    e.parentNode.remove();
}

