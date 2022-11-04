


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
        this[uuidNo] = {
            title,
            project,
            description,
            priority,
            'due_date': new Date(due_date),
            status
        };
        localStorage.setItem(uuidNo,JSON.stringify(this[uuidNo]))
    }
})();