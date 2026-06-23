
function sayGoodbye() {

    console.log("Goodbye!");
}

function executeAction(action) {
    console.log("sumit action...");
    action(); 
}

executeAction(sayGoodbye);


