//Run script after everything loads

document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    loadTasks();

    function addTask(taskText = '', save = true){

        if (taskText === '') {
            taskText = taskInput.value.trim();
        }

        if(taskText === ""){
            if (save){
                alert("Enter a task");
            }
        }else{
            //Add and remove tasks
            let taskListItem = document.createElement('li');
            taskListItem.textContent = taskText;

            let removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            taskListItem.appendChild(removeBtn);

            taskList.appendChild(taskListItem);

            // taskText = "";

            taskInput.value = '';

            console.log(taskList);

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            //Remove tasks
            const removeButtons = document.querySelectorAll('.remove-btn');

            removeButtons.forEach(button => {
                button.addEventListener('click', function(){
                    const parent = this.closest('li');
                    if (parent) {
                        parent.remove();

                        // Update localStorage
                        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                        const updatedTasks = storedTasks.filter(task => task !== taskText);
                        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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

    function loadTasks(){
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        savedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    
});