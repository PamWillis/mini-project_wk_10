// TODO: Import your Header, TaskList, and TaskListItem
const taskList = require("./Develop/lib/taskList.js");
const date = require("./Develop/lib/date.js")

function rendertaskList(title, taskListItems) {
  function createDocument(title, tasks = []) {
    const title = document.createElement('h1')
    document.getElementsByElementClassName('header').appendChild(ul);

    const tasks = document.createElement('li')
    document.getElementsByTagName('header').appendChild(li);
    return taskList;
  }
  // TODO: Create a new Header
  // TODO: Create new TaskListItems from the provided tasks
  // TODO: Add TaskListItems to a new TaskList

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My To Do Lists</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
      
      <header class="header">
      //title
      <p>${date}</p>
      </header>
      //taskListItems
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
