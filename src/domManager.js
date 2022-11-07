import {status as status} from './statusHandler.js'
import {manager as psmanager} from './projectStateManager.js'

const dommanager = (function() {
    function initTimeButtons() {

    };

    function initProjects() {

    };


    function initPage() {
        // Add appropriate functions to the time sort buttons
        let allButton = document.querySelector('.all');
        allButton.onclick = () => {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            allButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName(projectName);
            status.setFinishedStatus(false);
            renderTable();
        }
        let thisWeekButton = document.querySelector('.this-week');
        thisWeekButton.onclick = () => {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            thisWeekButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('This Week');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName(projectName);
            status.setFinishedStatus(false);
            renderTable();
        }
        let overdueButton = document.querySelector('.overdue');
        overdueButton.onclick = () => {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            overdueButton.classList.add('highlighted');
            status.setPriority('');
            status.setdate('Overdue');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            status.setProjectName(projectName);
            status.setFinishedStatus(false);
            renderTable();
        }

    };

    function populateProject() {
        
    };

    function createModal() {

    };



    function renderTable() {
        let taskList = status.getList();
        let tableID = document.querySelector('#main-todo');

        if (taskList.length == 0) {
            tableID.appendChild(createNoTasksDiv());
        } else {
            taskList.forEach((el) => {
                tableID.appendChild(createTaskRow(el['UUID'],el['title'],el['description'],el['due_date']));
            })
        }
    };

    function createTaskRow(uuid,title,desc,date) {
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
        dateDiv.classList.add('due-date-content');
        dateDiv.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
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
})();

export default dommanager;