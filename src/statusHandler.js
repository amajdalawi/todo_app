import dfns from 'date-fns';
import manager from './projectStateManager';

const status = (function() {
    let priority = '';
    let project_current = '';
    let finished_status = false;
    let date = '';


    function getList() {
        let shown_array = [];
        
        project_tasks = manager.getProjectTasks();
        for (const id of project_tasks) {
                shown_array.push(Object.assign({},{UUID: id}, project_tasks[id]))
        }
        if (!project_current) {
            shown_array = shown_array.filter((el) => {return el[project] == project_current})
        }
        if (priority == 'High') {
            shown_array = shown_array.filter((el) => {return el[priority] == 'High'})
        }
        if (finished_status == true) {
            shown_array = shown_array.filter((el) => {return el[status] == true})
        }
        if (date == 'Today') {
            
        }
    }
})