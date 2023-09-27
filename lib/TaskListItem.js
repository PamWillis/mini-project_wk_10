const Component = require("./component.js");
const CLI = require("./cli.js")

class TaskListItem extends Component {
    constructor(children) {
        this.children = children;
    }
    render() {
        if (priority === true) {
            this.priority = priority;
        }
    }
    renderInnerHTML() {
        var newTaskListItem = []
        newTaskListItem.push((<li class="tasks-item">{children}</li>).render());
    }
}

module.exports = TaskListItem;