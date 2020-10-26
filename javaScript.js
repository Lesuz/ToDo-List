window.onload = function() {

    // get elements that are needed
    var buttonAdd = document.getElementById("add");
    var inputTodo = document.getElementById("todo");
    var inputDate = document.getElementById("date");
    var deleteButton = document.getElementsByClassName("delete");
    var moreButton = document.getElementsByClassName("arrows");

    // Add button event listener
    buttonAdd.addEventListener("click", function() {
        // get input values   
        var taskToDo = inputTodo.value ;
        var doneByDate = inputDate.value;

        var myTable = document.getElementsByClassName("TodoTable")[0];
        var newTable = myTable.cloneNode(true);
        document.body.appendChild(newTable);
    });
}