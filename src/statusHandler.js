import * as dfns from 'date-fns';
import {manager as manager} from './projectStateManager';

const status = (function() {
    let priority = '';
    let project_current = '';
    let finished_status = false;
    let date = '';


    function getList() {
        let shown_array = [];
        
        let project_tasks = manager.getProjectTasks();
        // console.log(project_tasks)
        for (const id of (Object.keys(project_tasks))) {
                shown_array.push(Object.assign({},{UUID: id}, project_tasks[id]))
        }
        // for testing
        // console.log(`shown array is ${shown_array}`)
        // for (const x of shown_array) {
        //     console.log(x);
        // }
        // end testing

        if (project_current) {
            shown_array = shown_array.filter((el) => {return el['project'] == project_current})
        }
        if (priority === 'High') {
            shown_array = shown_array.filter((el) => {return el['priority'] == 'High'})
        }
        if (finished_status === true) {
            shown_array = shown_array.filter((el) => {return el['status'] == true})
        }
        let today = new Date(new Date().toJSON().slice(0,10));
        console.log(today)
        if (date === 'Today') {
            shown_array = shown_array.filter((el) => {return dfns.compareAsc(today, new Date(el['due_date'])) === 0});
        } else if (date === 'This Week') {
            shown_array = shown_array.filter((el) => {
                return (dfns.compareAsc(today,new Date(el['due_date'])) === -1 && dfns.compareAsc(dfns.addDays(today,7),new Date(el['due_date'])) === 1)
            })
        } else if (date === 'Overdue') {
            console.log(date)
            shown_array = shown_array.filter((el) => {
                console.log(`the date of today var is ${today}, and for the due date it is ${new Date(el['due_date'])}`)
                console.log(dfns.compareAsc(today, new Date(el['due_date'])))
                
                return dfns.compareAsc(today, new Date(el['due_date'])) === 1});
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

    function setFinishedStatus(st) {
        // st must be a boolean
        finished_status = st;
    }

    return {getList, setPriority, setProjectName,setdate,setFinishedStatus}
})();

export {status};