const Component = require("./component.js");
const CLI = require("./cli.js");


class TaskList extends Component {
    construction (children = []) {
        this.children = children;
    }
    renderInnerHTML() {
        var newTaskList=[];
        newTaskList.push(<ul class="tasks">{INNER_HTML}</ul>)
    }
}
module.exports = TaskList;