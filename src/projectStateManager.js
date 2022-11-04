import {v4 as v4} from 'uuid';

const manager = (function() {
    let project_list = [];
    let project_tasks = {};

    function dumpLS(obj) {
        for (let i = 0; i < localStorage.length, i++) {
            obj[localStorage.key(i)]  = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }
    }

    if (localStorage.length >  1) {
        dumpLS(project_tasks)
    }

    function resetLS() {
        project_tasks = {};
        localStorage.clear();
    }

    function addTodo(title,project,description,priority,due_date,status) {
        let uuidNo = v4();
        project_tasks[uuidNo] = {
            title,
            project,
            description,
            priority,
            'due_date': new Date(due_date),
            status
        };
        localStorage.setItem(uuidNo,JSON.stringify(this[uuidNo]))
    }

    function editTodoAttribute(uuid, attr, val) {
        project_tasks[uuid][attr] = val;
        localStorage.setItem(uuid, JSON.stringify(project_tasks[uuid]));
    }

    function getProjectTasks() {
        return project_tasks;
    }

    function addProjectName(somestr) {
        project_list.push(somestr);
    }

    function removeProjectName(somestr) {
        // todo!
        project_list.splice()
    }

    return {dumpLS, resetLS, addTodo, addProjectName,removeProjectName,getProjectTasks,editTodoAttribute};
})();

export default manager;