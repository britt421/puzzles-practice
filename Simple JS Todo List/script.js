
window.setTimeout(function() {
    
    var response = prompt("What would you like to do?");
    var todoList = ["Buy a Subaru CrossTrek", "Make a Million Dollars", "Buy a Ranch", "Start a School"];

    function printList(item, whatta){ //I don't understand why the second argument is an index of the array :(
        console.log(whatta + ": " + item);
    }

    while (response !== "quit"){
        if(response === "new"){
            addTodo();
        } else if (response === "list"){
            listTodo();
        } else if (response === "delete"){
            deleteTodo();
        }
            response = prompt("What would you like to do?");
        }

            alert("Good-bye!");

        function addTodo(){
            var newTodo = prompt("Enter a new todo:");
            todoList.push(newTodo);
        }

        function listTodo(){
            todoList.forEach(printList);
        }

        function deleteTodo(){
            var deleteItem = parseInt(prompt("Which item NUMBER would you like to delete?"));
            console.log("Deleted Item #" + deleteItem + " " + todoList[(deleteItem)]);
            alert("The todo item: " + todoList[(deleteItem)] + " has been deleted.");
            todoList.splice(deleteItem, 1); //slice is a method that will remove items from an array based on index# needs two arguments (index# and #ofItems to be deleted)
        }
     
}, 500);