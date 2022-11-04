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
        let today = new Date(new Date().toJSON().slice(0,10));
        if (date == 'Today') {
            shown_array = shown_array.filter((el) => {return dfns.compareAsc(today, el[due_date] === 0)});
        } else if (date == 'This Week') {
            shown_array = shown_array.filter((el) => {
                return (dfns.compareAsc(today,el[due_date]) === -1 && dfns.compareAsc(dfns.addDays(today,7),el[due_date] === 1))
            })
        } else if (date == 'Overdue') {
            shown_array = shown_array.filter((el) => {return dfns.compareAsc(today, el[due_date] === 1)});
        }

        return shown_array;
    }

    function setProjectName(name) {
        project_current = name;
    }

    function setdate(d) {
        // should be either a string or a date object, will see later
        date = d;
    }

    function setPriority(prio) {
        priority = prio;
    }

    function setStatus(st) {
        // st must be a boolean
        status = st;
    }
})