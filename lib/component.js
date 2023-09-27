const Header = require("./header");
const TaskList = require("./TaskList");
const TaskListItem = require("./TaskListItem");

class Component {
    constructor(children = []) {
        this.children = children;

    }
    render() {
        throw new Error("Child class must implemenet this.render() method");
    }

    renderInnerHTML() {
        var newArray = []
        for (i = 0; i < children.length; i++) {
            if (typeof children[i] === 'string') {
                newArray.push(children[i]);
            }
            else {
                // var newHeader = []
                newArray.push({<header class="header"><h1>Todo Today</h1><p>${formatDate}</p></header>});

                // var newTaskList = [];
                newArray.push(<ul class="tasks">{INNER_HTML}</ul>);

                // var newTaskListItem = []
                newArray.push({<li class="tasks-item">{INNER_HTML}</li>});      

                newArray.push(children[i].render())

            }
        }
    }
}
module.exports = Component;