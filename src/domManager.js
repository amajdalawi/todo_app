import {status as status} from './statusHandler.js'
import {manager as psmanager} from './projectStateManager.js'

const dommanager = (function() {
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

    function createModal() {

    };



    function renderTable() {
        // remove all the divs after the table header
        let listOfTodos = document.querySelectorAll('.task-row');
        let mainTableDiv = document.querySelector('#main-todo')
        for (let x of listOfTodos) {
            mainTableDiv.removeChild(x);
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

    }

    return {initPage}
})();

export default dommanager;