//if the input value varies, then 'let' is a better choice
//if the input value does not vary then 'const' is a better choice
const form = document.querySelector("form"); //gets info from the form element
const taskInput = document.querySelector('#task'); //gets info from elements with the id 'task'

//if the form is submitted, addTask function will run
form.addEventListener("submit", addTask)

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

    //define the <ul> DOM element by its class
    const ul = document.querySelector('.collection');
    ul.appendChild(li); //add the <li> to <ul>

    // clear input value (aka empties the previously inserted value from the input window, without this if you were to add 'apple' into the input field and submit it, then the word would remain in the input window (as well as appear on the list that was just created)
    taskInput.value = '';

    event.preventDefault(); //form submit event control (prevents the submit only appearing in the console for the brief but instead keeps it there (useful while writing the code))
}


