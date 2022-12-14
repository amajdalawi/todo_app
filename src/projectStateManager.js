import {v4 as v4} from 'uuid';

const manager = (function() {
    let project_list = [];
    let project_tasks = {};

    function dumpLS(obj) {
        for (let i = 0; i < localStorage.length; i++) {
            obj[localStorage.key(i)]  = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }
    }

    function ifobjinarray(obj,array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]  === obj)  {
                return true;
            }
        }
        return false;
    }

    if (localStorage.length >  0) {
        dumpLS(project_tasks)
        // must also dump the project Names of the todo tasks form the project_tasks into the project_list variable
        for (const keyid of Object.keys(project_tasks)) {
            if (!ifobjinarray(project_tasks[keyid]['project'], project_list)) {
                project_list.push(project_tasks[keyid]['project'])
            }

        }
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
            due_date: new Date(due_date),
            status
        };
        // console.log(project_tasks[uuid])
        localStorage.setItem(uuidNo,JSON.stringify(project_tasks[uuidNo]))
    }

    function editTodoAttribute(uuid, attr, val) {
        project_tasks[uuid][attr] = val;
        localStorage.setItem(uuid, JSON.stringify(project_tasks[uuid]));
    }

    function getProjectTasks() {
        return project_tasks;
    }

    function getProjectList() {
        return  project_list;
    }

    function addProjectName(somestr) {
        project_list.push(somestr);
    }

    function removeProjectName(somestr) {
        for (let i = 0; i < project_list.length; i++) {
            if (somestr == project_list[i]) {
                project_list.splice(i,1)
            }
        }
    }

    function removeTodo(uuidno) {
        delete project_tasks[uuidno];
        localStorage.removeItem(uuidno);
    }

    return {dumpLS, resetLS, addTodo, addProjectName,removeProjectName,getProjectTasks,editTodoAttribute, getProjectList, removeTodo};
})();

export {manager};