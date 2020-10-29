window.onload = function() {

    // get elements that are needed
    var buttonAdd = document.getElementById("add");
    var inputTodo = document.getElementById("todo");
    var inputDate = document.getElementById("date");
    var inputImportance = document.getElementById("selection");
    var errormessage = document.getElementById("warning");
    var buttonDelete = document.getElementsByClassName("delete");
    var moreButton = document.getElementsByClassName("arrows");
    var wholeTable = document.getElementById("TodoTable");

    // Add button event listener thta is triggered when the "add" -button is pressed
    buttonAdd.addEventListener("click", function() {
        // get input values   
        var taskToDo = inputTodo.value ;
        var doneByDate = inputDate.value;

        errormessage.style.display = "none";

        // Checking for empty input
        if (taskToDo === "" || taskToDo === " ") {
            errormessage.style.display = "block";
            errormessage.innerHTML = "Cannot add an empty task to the list!";
        }else if (!doneByDate){
            errormessage.style.display = "block";
            errormessage.innerHTML = "Cannot add a task without a done by date!";
        }else{
            // Getting the value of the pulldown menu(importance of task)
            var importanceValue = inputImportance.options[inputImportance.selectedIndex].value;

            // create table element
            var table = document.createElement('table');
            // Adding margins to the table so that there is empty space in between of tables
            table.style.marginTop = "10px" ;
            table.style.marginBottom = "10px" ;

            // Changing the color of the table according to the importance of the task
            if(importanceValue === "low"){
                table.style.backgroundColor = "#a6dba6";
            }else if(importanceValue === "medium"){
                table.style.backgroundColor = "#fffab7";
            }else if(importanceValue === "high"){
                table.style.backgroundColor = "#ff7373";
            }

            // add a row element into the table
            var row = table.insertRow();
            // add the first cell element into the row
            var cell = row.insertCell();

            // add the the text into the cell
            cell.innerHTML = taskToDo;
            cell.style.paddingRight = "30px";
            cell.style.width = "60%";

            // add the second cell with the date
            cell = row.insertCell();
            cell.innerHTML = doneByDate;
            cell.style.width = "200px";

            // add the third cell with the image to delete the task
            cell = row.insertCell();
            cell.innerHTML = '<img src="images/error.png" alt="delete" class="delete">';
            // Adding a delete function to the image
            cell.addEventListener("click", function(){
                deleteTask(this)
            });
            
            // Adding a couple styles
            cell.style.borderStyle = "hidden";
            cell.style.width="5%";
            cell.style.background = "none";

            // append the table
            wholeTable.appendChild(table);
        }
    });

    function deleteTask(elem) {
        // Save the table into a variable and remove the table from the tables parentNode -> <div>
        // elem = image, first parentNode = cell, seccond parentNode = row, third parentNode = table
        var taskTable = elem.parentNode.parentNode.parentNode
        taskTable.parentNode.removeChild(taskTable);
    }

}