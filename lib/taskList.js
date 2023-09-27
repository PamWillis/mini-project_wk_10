const Component = require("./component.js");
const CLI = require("./cli.js");
const TaskListItem = require(".'TaskListItem")


class TaskList extends Component {
    construction (children = []) {
        this.children = children;
    }
    render() {
    }
}
module.exports = TaskList;