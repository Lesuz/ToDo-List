window.onload = function() {

    // get elements that are needed
    var buttonAdd = document.getElementById("add");
    var inputTodo = document.getElementById("todo");
    var inputDate = document.getElementById("date");
    var errormessage = document.getElementById("warning");
    var buttonDelete = document.getElementsByClassName("delete");
    var moreButton = document.getElementsByClassName("arrows");
    // var deleteBut = document.getElementById("delete");
    var wholeTable = document.getElementById("TodoTable");

    // Add button event listener
    buttonAdd.addEventListener("click", function() {
        // get input values   
        var taskToDo = inputTodo.value ;
        var doneByDate = inputDate.value;

        //var date = new Date(inputDate);

        errormessage.style.display = "none";

        if (taskToDo === "" || taskToDo === " ") {
            errormessage.style.display = "block";
            errormessage.innerHTML = "Cannot add an empty task to the list!";
        }else if (!doneByDate){
            errormessage.style.display = "block";
            errormessage.innerHTML = "Cannot add a task without a done by date!";
        }else{


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
            cell.style.paddingRight = "30px";

            // add the third cell with the date
            cell = row.insertCell();
            cell.innerHTML = doneByDate;
            cell.style.width = "200px";

            // add the fourth cell with the image to delete the task
            cell = row.insertCell();
            cell.innerHTML = '<button class="delete">Delete</button>';
            cell.addEventListener("click", function(){
                deleteTask(this)
            });
            
            // Adding a couple styles
            cell.style.backgroundColor = "#fff2fe";
            cell.style.borderStyle = "hidden";

            // append the table
            wholeTable.appendChild(table);
        }
    });

    function deleteTask(elem) {
        var taskTable = elem.parentNode.parentNode.parentNode
        taskTable.parentNode.removeChild(taskTable);
    }
}