import {status as status} from './statusHandler.js'
import {manager as psmanager} from './projectStateManager.js'

const dommanager = (function() {
    function initButtons() {
        let addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.onclick = function() {
            createModal();
            // the modal window to add the add task form into 
            let modalWindow = document.querySelector('.modal-window');

            let formEl = document.createElement('form');
            
            // title of task
            let titleLabel = document.createElement('label');
            titleLabel.setAttribute('for','title');
            titleLabel.innerHTML = 'Title';
            let titleForm = document.createElement('input');
            titleForm.setAttribute('id','title');
            titleForm.setAttribute('type','text');
            titleForm.setAttribute('name','title');
            titleForm.setAttribute('required','');
            formEl.appendChild(titleLabel);
            formEl.appendChild(titleForm);

            // task project
            let pl = psmanager.getProjectList();
            let projectListLabel = document.createElement('label');
            projectListLabel.setAttribute('for','projectName');
            projectListLabel.innerHTML = 'Project Name';
            let projectListForm = document.createElement('select');
            projectListForm.setAttribute('id','projectName');
            projectListForm.setAttribute('name','projectName');
            for (const x of pl) {
                projectListForm.innerHTML += `<option value="${x}">${x}</option>`

            }
            formEl.appendChild(projectListLabel);
            formEl.appendChild(projectListForm);

            // due date el
            let dueDateLabel = document.createElement('label');
            dueDateLabel.setAttribute('for','due_date');
            dueDateLabel.innerHTML = 'Due Date';
            let dueDateForm = document.createElement('input');
            dueDateForm.setAttribute('type','date');
            dueDateForm.setAttribute('id','due_date');
            dueDateForm.setAttribute('name','due_date');
            dueDateForm.setAttribute('required','');
            formEl.appendChild(dueDateLabel);
            formEl.appendChild(dueDateForm);

            // priority options
            let prioLabel = document.createElement('label');
            prioLabel.setAttribute('for','priority');
            prioLabel.innerHTML = 'Priority';
            let prioForm = document.createElement('select');
            prioForm.setAttribute('id','priority');
            prioForm.setAttribute('name','priority');
            let lowPrio = document.createElement('option');
            lowPrio.setAttribute('value','Low');
            lowPrio.innerHTML = "Low";
            let highPrio = document.createElement('option');
            highPrio.setAttribute('value','High');
            highPrio.innerHTML = "High";
            prioForm.appendChild(lowPrio);
            prioForm.appendChild(highPrio);
            formEl.appendChild(prioLabel);
            formEl.appendChild(prioForm);

            // desc
            let descrLabel = document.createElement('label');
            descrLabel.setAttribute('for','description');
            descrLabel.innerHTML = 'Description';
            let descForm = document.createElement('textarea');
            descForm.setAttribute('id','description');
            descForm.setAttribute('name','description');
            descForm.setAttribute('rows','5')
            formEl.appendChild(descrLabel);
            formEl.appendChild(descForm);

            // submit button
            let submitBtn = document.createElement('button');
            submitBtn.setAttribute('type','submit');
            submitBtn.innerHTML = 'Submit Task';
            formEl.appendChild(submitBtn);



            modalWindow.appendChild(formEl);
            formEl.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.target).entries());
                // console.log(data)
                let body = document.querySelector('body');
                // console.log(data.title,e['projectName'],e['description'],e['priority'],new Date(e['due_date']))

                psmanager.addTodo(data['title'],data['projectName'],data['description'],data['priority'],new Date(data['due_date']))
                body.removeChild(document.querySelector('.modal-bg'))
                renderTable();
              });
        }
    }

    function initTimeButtons() {

        let allButton = document.querySelector('.all');
        console.log(allButton);
        allButton.onclick = function()  {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            allButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName('');
            status.setFinishedStatus(false);
            renderTable();
        }
        let thisWeekButton = document.querySelector('.this-week');
        thisWeekButton.onclick = function() {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            thisWeekButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('This Week');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName('');
            status.setFinishedStatus(false);
            renderTable();
        }
        let overdueButton = document.querySelector('.overdue');
        overdueButton.onclick = function() {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            overdueButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('Overdue');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName('');
            status.setFinishedStatus(false);
            renderTable();
        }
    };

    function initProjects() {
        // psmanager.resetLS();
        if (localStorage.length == 0) {
            psmanager.addProjectName('Default');
            psmanager.addTodo('My first todo','Default','weoifjewf','High','2022-11-09',false);
            psmanager.addTodo('My sec todo','Default','gdrgr','High','2023-11-09',false);
            psmanager.addTodo('My  todo','Default','rtdrt','High','2022-12-09',false);
        }
    };


    function initPage() {
        initProjects();
        populateProject();
        initTimeButtons();
        renderTable();
        initButtons();
        // Add appropriate functions to the time sort buttons
        

    };

    function populateProject() {
        let projectcontainer = document.querySelector('.projects-list');
        let projectList = psmanager.getProjectList();
        console.log(`projectList is ${projectList}`)
        console.log(projectList)
        projectList.forEach((el) => {
            let projectButton = document.createElement('div');
            projectButton.classList.add('project-button');
            projectButton.setAttribute('id',el);
            projectButton.innerHTML = el;
            projectcontainer.appendChild(projectButton)
        })
    };

    function renderTable() {
        // remove all the divs after the table header
        let listOfTodos = document.querySelectorAll('.task-row');
        let mainTableDiv = document.querySelector('#main-todo');
        for (let x of listOfTodos) {
            mainTableDiv.removeChild(x);
        };
        let noTodoDiv  = document.querySelector('.no-task');
        if (noTodoDiv) {
            mainTableDiv.removeChild(noTodoDiv);

        }

        // get the list of tasks according to the status variables
        let taskList = status.getList();
        console.log(taskList);
        let tableID = document.querySelector('#main-todo');

        if (taskList.length == 0) {
            tableID.appendChild(createNoTasksDiv());
        } else {
            taskList.forEach((el) => {
                tableID.appendChild(createTaskRow(el['UUID'],el['title'],el['description'],el['due_date']));
            })
        }
    };

    function createTaskRow(uuid,title,desc,date_s) {
        // create the row div itself
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('task-row');
        
        // create the check sign div
        let checkDiv = document.createElement('div');
        checkDiv.classList.add('checked-button-div');
        let checkCircle = document.createElement('div');
        checkCircle.classList.add('check-button');
        checkCircle.onclick = function() {
            // to do tomorrow
        }
        checkDiv.appendChild(checkCircle);
        rowDiv.appendChild(checkDiv);

        // create the title div
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title-content');
        titleDiv.innerHTML = title;
        rowDiv.appendChild(titleDiv);

        //create the desc div
        let descDiv = document.createElement('div');
        descDiv.classList.add('desc-content');
        descDiv.innerHTML = desc;
        rowDiv.appendChild(descDiv);

        // create the date div
        let dateDiv = document.createElement('div');
        let date = new Date(date_s);
        dateDiv.classList.add('due-date-content');
        dateDiv.innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        rowDiv.appendChild(dateDiv);

        // create the buttons div
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons-content');
        let buttonsFlex = document.createElement('div');
        buttonsFlex.classList.add('buttons-flex');
        buttonsDiv.appendChild(buttonsFlex);
        let editButtonDiv = document.createElement('div');
        editButtonDiv.classList.add('edit-button');
        editButtonDiv.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
        let deleteButtonDiv = document.createElement('div');
        deleteButtonDiv.classList.add('delete-button');
        deleteButtonDiv.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
        deleteButtonDiv.onclick = function() {
            psmanager.removeTodo(uuid);
            renderTable();
        }
        let infoButtonDiv = document.createElement('div');
        infoButtonDiv.classList.add('show-info');
        infoButtonDiv.innerHTML = '<ion-icon name="information-circle-outline"></ion-icon>';
        buttonsFlex.appendChild(editButtonDiv);
        buttonsFlex.appendChild(deleteButtonDiv);
        buttonsFlex.appendChild(infoButtonDiv);
        rowDiv.appendChild(buttonsDiv);
        
        return rowDiv;
    }

    function createNoTasksDiv() {
        // let mainTableDiv = document.querySelector('#main-todo');
        let noTodoDiv = document.createElement('div');
        noTodoDiv.classList.add('no-task');
        noTodoDiv.innerHTML = 'No Tasks to show'
        // mainTableDiv.appendChild(noTodoDiv);
        return noTodoDiv;
    }

    function createModal() {
        // opaque bg
        let modalBg = document.createElement('div');
        modalBg.classList.add('modal-bg');

        // modal window element
        let modalWindow = document.createElement('div');
        modalWindow.classList.add('modal-window');
        modalBg.appendChild(modalWindow);
        let body = document.querySelector('body');
        body.appendChild(modalBg);

        window.onclick = function(e) {
            if (e.target == modalBg) {
                body.removeChild(modalBg);
            }
        }
    }

    return {initPage}
})();

export default dommanager;