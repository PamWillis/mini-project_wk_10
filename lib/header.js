const Component =requre("./component.js");
const {formatDate} = require("./date.js");
const CLI = require("./cli.js")

class Header extends Component {
    constructor (header= []) {
        this.header = header;
    }
    render() {
        var newHeader=[]
        newHeader.push(<header class="header"><h1>Todo Today</h1><p>${formatDate}</p></header>)
    }
}

module.exports = Header;