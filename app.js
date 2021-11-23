//if the input value varies, then 'let' is a better choice
//if the input value does not vary then 'const' is a better choice
const form = document.querySelector("form"); //gets info from the form element
const taskInput = document.querySelector('#task'); //get form input data
const tasksList = document.querySelector('.collection'); //get the ul area through class
const delTasksBtn = document.querySelector('#del-tasks'); //get the Delete button through id

//if the form is submitted, addTask function will run
form.addEventListener("submit", addTask)
//if the ul area is clicked, deleteTask function will run
tasksList.addEventListener('click', deleteTask);
//if the Delete button is clicked, deleteTasks will run
delTasksBtn.addEventListener('click', deleteTasks);

//if X is clicked, the task is removed from the list
function deleteTask(event) {
    //if X is clicked
    if(event.target.textContent == 'X') {
        //ask for confirmation
        if(confirm('Do you want to delete this task=')){
            //delete parent element (li) of the target (X) at the event (click)
            event.target.parentElement.remove();
        }
    }
}
//if the button is clicked, whole list is removed
function deleteTasks () {
    //upon click, the HTML text (ul list) gets emptied
    //tasksList.innerHTML = '';

    //deletion through firstChildElement (faster process than deleting HTML, especially if the deleted data is big)
    //repetitive process until all list items are removed
    //while is used when the number of events/processes is unknown (don't know exactly how many deletions will have to be made before all is deleted)
    //if there is a firstChild of the list
    while(tasksList.firstChild) {
        //delete first Child
        tasksList.removeChild(tasksList.firstChild);
    }
}


//if the function is related to an event (e.g. submit), event has to be specified in the function brackets
function addTask(event) {
    const task = taskInput.value; //gets the input value

    //create <li> DOM element by tag and class name
    const li = document.createElement('li');
    li.className = "collection-item";
    //create a TextNode from the task value
    const text = document.createTextNode(task);
    //add this text as the child of li aka to <li> (in between the html tags where text would go if we were otherwise to fill the list items ourselves)
    li.appendChild(text);
    // create link element
    const link = document.createElement('a');
    //set href attribute that doesn't lead anywhere (with #)
    link.setAttribute('href', `#`)
    //add css style (gap between text and link)
    link.className = 'secondary-content';
    //add X text to link
    link.appendChild(document.createTextNode('X'));
    //add link to <li>
    li.appendChild(link);

    //define the <ul> DOM element by its class
    const ul = document.querySelector('.collection');
    //add <li> to <ul>
    ul.appendChild(li);

    // clear input value (aka empties the previously inserted value from the input window, without this if you were to add 'apple' into the input field and submit it, then the word would remain in the input window (as well as appear on the list that was just created)
    taskInput.value = '';

    event.preventDefault(); //form submit event control (prevents the submit only appearing in the console for the brief but instead keeps it there (useful while writing the code))
}


