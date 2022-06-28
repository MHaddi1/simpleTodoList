function todoList() {
    var todo;
    todo = document.querySelector("input").value
    var node = document.createTextNode(todo);
    var len = todo.length;
    if (len == " ") {
        alert("Please Enter the todo into the input feild")
    }
    else {

        var newItem = document.createElement("li");
        newItem.appendChild(node);
        document.getElementById("todoList").appendChild(newItem);

    }

}