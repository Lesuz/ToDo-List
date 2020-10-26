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

        // create table element
        var table = document.createElement('table');
        table.style.marginTop = "10px" ;
        table.style.marginBottom = "10px" ;
        // add a row element into the table
        var row = table.insertRow();
        // add the first cell element into the row
        var cell = row.insertCell();

        // Add input into the cells
        // first cell has the arrow image
        cell.innerHTML = '<img class ="arrows" src="images/arrowdown.png" alt="Arrowdown">';
        // Adding a couple styles
        cell.style.backgroundColor = "#fff2fe";
        cell.style.borderStyle = "hidden";
        // add second cell with the task
        cell = row.insertCell();
        cell.innerHTML = taskToDo;
        // add the third cell with the date
        cell = row.insertCell();
        cell.innerHTML = doneByDate;
        // add the fourth cell with the image to delete the task
        cell = row.insertCell();
        cell.innerHTML = '<img class ="delete" src="images/error.png" alt="delete">';
        // Adding a couple styles
        cell.style.backgroundColor = "#fff2fe";
        cell.style.borderStyle = "hidden";

        // appned the table into the div with the classname of TodoTable
        document.getElementsByClassName("TodoTable")[0].appendChild(table);
    });
}