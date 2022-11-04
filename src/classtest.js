class todo_ask {
    constructor(title, priority, description, date) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.date = new Date(1998,11,2);
    };


}

let z = new todo_ask('w','top','dsafjasfdsaf');
console.log(JSON.stringify(z))
