import './style.css';
import {v4 as v4} from 'uuid';
import {status as status} from './statusHandler.js';
import {manager as manager} from './projectStateManager.js';

// interface/internal parts


// let dumpLS = (someObj) => {
//     for (let i = 0; i < localStorage.length; i++) {
//         console.log(`${localStorage.key(i)} is ${localStorage.getItem(localStorage.key(i))}`)
//         someObj[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i))) ;  
//     }
// }

// class ult {
//     constructor() {
//         if (localStorage.length > 0) {
//             dumpLS(this)
//         } 
//     }

//     set_attr(uuid,attr,val) {
//         this[uuid][attr] = val;
        
//     }

//     get_attr(uuid,attr) {
//         return this[uuid][attr]
//     }

//     addTodo(title,project,description,priority,due_date,status) {
//         let uuidNo = v4();
//         this[uuidNo] = {
//             title,
//             project,
//             description,
//             priority,
//             'due_date': new Date(due_date),
//             status
//         };
//         localStorage.setItem(uuidNo,JSON.stringify(this[uuidNo]))
//     }

//     resetLS() {
//         for (const x of this) {
//             delete this[x]
//         };
//         localStorage.clear();
//     }

    
// }

// let z = new ult();
// console.log(z);
// z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);
// z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);
// z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);
// z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);


// //

// function sortByProject(project_name) {
//     let projectArray = [];
//     for (const x of ult) {
//         if (ult[x]['title'] === project_name) {
//             projectArray.push(Object.assign({},{'id':x},ult[x]))
//         }
        
//     }
//     return projectArray
// }

// function renderTable(project='',date='',priority='',checked=false) {
//     if (project) {
//         console.log(sortByProject(project));
//     }
// }

// renderTable('kek')