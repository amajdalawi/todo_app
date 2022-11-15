import {status as status} from './statusHandler.js'
import {manager as psmanager} from './projectStateManager.js'

const dommanager = (function() {
    function initButtons() {
        // add task button
        let addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.onclick = function() {
            createModal();
            // the modal window to add the add task form into 
            let modalWindow = document.querySelector('.modal-window');

            let formEl = document.createElement('form');
            formEl.classList.add('add-task-form')
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
            console.log(pl)
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

                psmanager.addTodo(data['title'],data['projectName'],data['description'],data['priority'],new Date(data['due_date']),false)
                body.removeChild(document.querySelector('.modal-bg'))
                renderTable();
              });
        };

        let addNewProjectButton = document.querySelector('.add-project-icon');
        addNewProjectButton.onclick = function() {
            createModal();
            // create the form for the project creation
            let formElement = document.createElement('form');
            let textLabel = document.createElement('label');
            textLabel.innerHTML = 'Enter the new project name';
            textLabel.setAttribute('for','new_project_name');
            let textInput = document.createElement('input');
            textInput.setAttribute('id','new_project_name');
            textInput.setAttribute('name','new_project_name');
            textInput.setAttribute('type','text')
            let originalList = psmanager.getProjectList();
            if (originalList.length > 0) {
                let patternString = originalList.join('|');
                let regexPattern = new RegExp(`\\b(?!(${patternString})\\b)\\w*`);
                textInput.setAttribute('pattern',regexPattern.source);
                
            }
            textInput.setAttribute('required','');

            //create the subtmit button
            let buttonWrapper = document.createElement('div');
            buttonWrapper.classList.add('create-new-project-button-wrapper');
            let submitButton = document.createElement('button');
            submitButton.setAttribute('type','submit');
            submitButton.innerHTML = 'Create New Project';
            submitButton.classList.add('create-new-project-name-button');
            buttonWrapper.appendChild(submitButton);

            formElement.addEventListener('submit',(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.target).entries());
                psmanager.addProjectName(data['new_project_name']);
                populateProject();
                let body = document.querySelector('body');
                let modalbg = document.querySelector('.modal-bg');
                body.removeChild(modalbg);

            })
            
            formElement.appendChild(textLabel);
            formElement.appendChild(textInput);
            formElement.appendChild(buttonWrapper);
            let modal_window = document.querySelector('.modal-window');
            modal_window.appendChild(formElement);
                  
        }

        // add new project Button

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
            // status.setProjectName('');
            status.setFinishedStatus(false);
            renderTable();
        }
        let thisWeekButton = document.querySelector('.this-week');
        thisWeekButton.onclick = function() {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            thisWeekButton.classList.add('highlighted');
            // status.setPriority('');
            status.setdate('This Week');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            // status.setProjectName('');
            status.setFinishedStatus(false);
            renderTable();
        }
        let overdueButton = document.querySelector('.overdue');
        overdueButton.onclick = function() {
            let allButtons = document.querySelectorAll('.time-sort > div');
            allButtons.forEach((el) => {el.classList.remove('highlighted')});
            overdueButton.classList.add('highlighted');
            // status.setPriority('');
            status.setdate('Overdue');
            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';
            // status.setProjectName('');
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
        console.log(projectList);
        projectcontainer.innerHTML = '';
        // console.log(`projectList is ${projectList}`)
        // console.log(projectList)
        projectList.forEach((el) => {
            let projectButton = document.createElement('div');
            let projectButtonWrapper = document.createElement('div');
            projectButtonWrapper.appendChild(projectButton);
            projectButton.classList.add('project-button');
            projectButton.setAttribute('id',el);
            projectButton.innerHTML = el;
            projectButton.onclick = function() {
                let projectButtonsList = document.querySelectorAll('.project-button');
                if (projectButton.classList.contains('highlighted-project')) {
                    projectButton.classList.remove('highlighted-project');
                    status.setProjectName('');
                    renderTable();
                } else {
                    projectButtonsList.forEach((ll) => {ll.classList.remove('highlighted-project')});
                    projectButton.classList.add('highlighted-project');
                    status.setProjectName(el);
                    renderTable();
                }
                
            }

            // Create the edit button
            let projectNameEditButton = document.createElement('div');
            projectNameEditButton.classList.add('project-edit-button')
            projectNameEditButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>'
            projectButtonWrapper.appendChild(projectNameEditButton);
            projectNameEditButton.onclick = function() {
                createModal();
                let modalWindow = document.querySelector('.modal-window');

                //create label and input
                let actualFormTag = document.createElement('form');
                let formWrapper = document.createElement('div');
                let labelEdit = document.createElement('label');
                labelEdit.innerHTML = 'Enter the new project name'
                labelEdit.setAttribute('for','project_name');
                let inputEdit = document.createElement('input');
                inputEdit.setAttribute('id','project_name');
                inputEdit.setAttribute('name','project_name')
                inputEdit.setAttribute('type','text');
                let modifiedList = projectList.filter((i) => {i !== el});
                console.log(modifiedList)
                let patternString = modifiedList.join('|');
                if (modifiedList.length > 0) {
                    let regexVar = new RegExp('\\b(?!(' + patternString + ')\\b)\w+/')
                    inputEdit.setAttribute('pattern',regexVar.source);
                    
                }
                inputEdit.setAttribute('required','');
                formWrapper.appendChild(labelEdit);
                formWrapper.appendChild(inputEdit);
                actualFormTag.appendChild(formWrapper);
                modalWindow.appendChild(actualFormTag);

                // create the buttons and their wrapper div
                let buttonWrapper = document.createElement('div');
                let cancelButton = document.createElement('div');
                let submitEditButton = document.createElement('button');
                submitEditButton.setAttribute('type','submit')
                
                buttonWrapper.classList.add('button-wrapper-edit-project-modal')
                cancelButton.classList.add('project-edit-cancel-button-modal');
                submitEditButton.classList.add('submit-button-edit-project-modal');


                cancelButton.innerHTML = 'Cancel';
                submitEditButton.innerHTML = 'Confirm Edit'

                // add functinoality to the buttons
                cancelButton.onclick = function() {
                    let bodyEl = document.querySelector('body');
                    bodyEl.removeChild(document.querySelector('.modal-bg'));

                }
                actualFormTag.addEventListener('submit',(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.target).entries());
                    console.log(data['project_name'])
                    projectButton.innerHTML = data['project_name'];
                    psmanager.removeProjectName(el);
                    psmanager.addProjectName(data['project_name'])
                    let pTasks = psmanager.getProjectTasks();
                    for (const k of Object.keys(pTasks)) {
                        if (pTasks[k]['project'] == el) {
                            psmanager.editTodoAttribute(k,'project',data['project_name'])
                        }
                    }
                    let bodyElement = document.querySelector('body');
                    bodyElement.removeChild(document.querySelector('.modal-bg'))
                    renderTable();
                })
                
                buttonWrapper.appendChild(cancelButton);
                buttonWrapper.appendChild(submitEditButton);
                actualFormTag.appendChild(buttonWrapper)
            }


            // create the delete button
            let projectDeleteButton = document.createElement('div');
            projectDeleteButton.classList.add('project-delete-button');
            projectDeleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
            projectDeleteButton.onclick = function() {
                createModal();
                let modalWindow = document.querySelector('.modal-window');
                modalWindow.style.width = 'max(23%,315px)'
                let warningDiv = document.createElement('div');
                warningDiv.innerHTML = 'Are you sure you want to delete this project and all its tasks?'
                modalWindow.appendChild(warningDiv)

                // button wrapper div
                let buttonWrapper = document.createElement('div');
                buttonWrapper.classList.add('button-modal-project-wrapper')

                //close modal button
                let closeModal = document.createElement('div');
                closeModal.innerHTML = 'Cancel';
                closeModal.classList.add('cancel-button-modal-project');
                closeModal.onclick = function() {
                    let bodyDoc = document.querySelector('body');
                    let modalBG = document.querySelector('.modal-bg');
                    
                    bodyDoc.removeChild(modalBG);
                }
                buttonWrapper.appendChild(closeModal);


                //delete button
                let deleteButtonFinalDiv = document.createElement('div');
                deleteButtonFinalDiv.innerHTML = 'Delete';
                deleteButtonFinalDiv.classList.add('delete-button-modal-project');
                deleteButtonFinalDiv.onclick = function() {
                    let projectMainObj = psmanager.getProjectTasks();
                    for (const x of Object.keys(projectMainObj)) {
                        if (projectMainObj[x]['project'] == el) {
                            psmanager.removeTodo(x);
                        }
                    }
                    let currentP = status.getProjectName();
                    psmanager.removeProjectName(el);
                    let projectlists = psmanager.getProjectList();
                    if (el == currentP) {
                        if (projectlists.length > 0) {
                            status.setProjectName(projectlists[0])
                        } else {
                            psmanager.addProjectName('Default');
                            status.setProjectName('Default');
                        }
                    }
                    let bodyDoc = document.querySelector('body');
                    let modalBG = document.querySelector('.modal-bg');
                    bodyDoc.removeChild(modalBG);

                    populateProject();
                    renderTable();
                }
                buttonWrapper.appendChild(deleteButtonFinalDiv);
                
                modalWindow.appendChild(buttonWrapper);
                
            }




            projectButtonWrapper.appendChild(projectDeleteButton);            

            projectcontainer.appendChild(projectButtonWrapper)

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
        editButtonDiv.onclick = function() {
            createEditTaskModal(uuid);
        }
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
        infoButtonDiv.onclick = function() {
            createEditTaskModal(uuid,true)
        }
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

    function createEditTaskModal(uuidNumber, disabled=false) {
        createModal();
        let modalWindow = document.querySelector('.modal-window');
        let ptasks = psmanager.getProjectTasks();

        // Create the form and title input
        let formEl = document.createElement('form');
        // let titleEditLabel = document.createElement('label');
        // titleEditInput.setAttribute('for','title');
        // titleEditLabel.innerHTML = 'Title';
        // let titleEditInput = document.createElement('input');
        // titleEditInput.setAttribute('id','title');
        // titleEditInput.setAttribute('name','title');
        // titleEditInput.setAttribute('value',ptasks[uuidNumber]['title']);
        // formEl.appendChild(titleEditLabel);
        // formEl.appendChild(titleEditInput);

        // create the project input
        // TODO for tomorrow: copy paste the addTaskButton function and change the values of the input forms
        // and change the buttons and their onclick attributes.
        // then make the info button function and the done function.

        formEl.classList.add('add-task-form')
        // title of task
        let titleLabel = document.createElement('label');
        titleLabel.setAttribute('for','title');
        titleLabel.innerHTML = 'Title';
        let titleForm = document.createElement('input');
        titleForm.setAttribute('value',ptasks[uuidNumber]['title']);
        titleForm.setAttribute('id','title');
        titleForm.setAttribute('type','text');
        titleForm.setAttribute('name','title');
        titleForm.setAttribute('required','');
        if (disabled) {titleForm.setAttribute('disabled','')};
        formEl.appendChild(titleLabel);
        formEl.appendChild(titleForm);

        // task project
        let pl = psmanager.getProjectList();
        console.log(pl)
        let projectListLabel = document.createElement('label');
        projectListLabel.setAttribute('for','projectName');
        projectListLabel.innerHTML = 'Project Name';
        let projectListForm = document.createElement('select');
        if (disabled) {projectListForm.setAttribute('disabled','')};
        projectListForm.setAttribute('id','projectName');
        projectListForm.setAttribute('name','projectName');
        for (const x of pl) {
            projectListForm.innerHTML += `<option value="${x}">${x}</option>`

        }
        let optionFormList = document.querySelectorAll('.modal-window option');
        for (let x of optionFormList) {
            if (x.getAttribute('value') == ptasks[uuidNumber]['project']) {
                x.setAttribute('selected','');
            }
        }
        formEl.appendChild(projectListLabel);
        formEl.appendChild(projectListForm);

        // due date el
        let dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for','due_date');
        dueDateLabel.innerHTML = 'Due Date';
        let dueDateForm = document.createElement('input');
        if (disabled) {dueDateForm.setAttribute('disabled','')};
        dueDateForm.setAttribute('type','date');
        dueDateForm.setAttribute('id','due_date');
        dueDateForm.setAttribute('name','due_date');
        dueDateForm.setAttribute('required','');
        console.log(ptasks[uuidNumber]['due_date'])
        dueDateForm.setAttribute('value',new Date(ptasks[uuidNumber]['due_date']).toISOString().split('T')[0]);
        formEl.appendChild(dueDateLabel);
        formEl.appendChild(dueDateForm);
        

        // priority options
        let prioLabel = document.createElement('label');
        prioLabel.setAttribute('for','priority');
        prioLabel.innerHTML = 'Priority';
        let prioForm = document.createElement('select');
        if (disabled) {prioForm.setAttribute('disabled','')};
        prioForm.setAttribute('id','priority');
        prioForm.setAttribute('name','priority');
        let lowPrio = document.createElement('option');
        lowPrio.setAttribute('value',ptasks[uuidNumber]['priority']);
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
        if (disabled) {descForm.setAttribute('disabled','')};
        descForm.setAttribute('id','description');
        descForm.setAttribute('name','description');
        descForm.setAttribute('rows','5');
        descForm.innerHTML = ptasks[uuidNumber]['description'];
        formEl.appendChild(descrLabel);
        formEl.appendChild(descForm);


        if (disabled) {
            let enableEdit = document.createElement('button');
            enableEdit.setAttribute('type','button');
            enableEdit.innerHTML = 'Edit Task';
            enableEdit.onclick = function() {
                let body = document.querySelector('body');
                let modalbg = document.querySelector('.modal-bg');
                body.removeChild(modalbg);
                createEditTaskModal(uuidNumber,false)
            }
            formEl.appendChild(enableEdit);
            modalWindow.appendChild(formEl);


        } else {
            let submitBtn = document.createElement('button');
            submitBtn.setAttribute('type','submit');
            submitBtn.innerHTML = 'Submit Edit';
            formEl.appendChild(submitBtn);
    
    
    
            modalWindow.appendChild(formEl);
            formEl.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.target).entries());
                // console.log(data)
                let body = document.querySelector('body');
                // console.log(data.title,e['projectName'],e['description'],e['priority'],new Date(e['due_date']))
    
                // psmanager.addTodo(data['title'],data['projectName'],data['description'],data['priority'],new Date(data['due_date']),false)
                psmanager.editTodoAttribute(uuidNumber,'title',data['title']);
                psmanager.editTodoAttribute(uuidNumber,'due_date',data['due_date']);
                psmanager.editTodoAttribute(uuidNumber,'project',data['projectName']);
                psmanager.editTodoAttribute(uuidNumber,'description',data['description']);
                psmanager.editTodoAttribute(uuidNumber,'priority',data['priority']);
    
    
                body.removeChild(document.querySelector('.modal-bg'))
                renderTable();
              });
        }
        // submit button
        

    }
    return {initPage}
})();

export default dommanager;