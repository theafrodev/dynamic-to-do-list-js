//Run script after everything loads

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText == ""){
            alert("Enter a task");
        }else{
            //Add and remove tasks
            let taskListItem = document.createElement('li');
            taskListItem.textContent = taskText;

            let removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            taskListItem.appendChild(removeBtn);

            taskList.appendChild(taskListItem);

            taskText = "";

            taskInput.value= taskText;

            console.log(taskList);

            const removeButtons = document.querySelectorAll('.remove-btn');

            removeButtons.forEach(button => {
                button.addEventListener('click', function(){
                    const parent = this.closest('li');
                    if (parent) {
                        parent.remove();
                    }
                });
            });
        }
    }

    addButton.addEventListener('click', ()=>{
        addTask();
    });

    //submit on enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});