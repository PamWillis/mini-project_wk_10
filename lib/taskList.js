const cli=require("./cli.js")

class taskList {
    constructor (title, taskListItems) {
        this.title = title,
        this.taskListItems = taskListItems
    }
}
taskList.prototype.addtaskListItems = function(taskListItems) {
    this.taskListItems.push(taskListItems)
}

module.exports = taskList;