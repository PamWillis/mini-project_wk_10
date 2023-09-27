const Component =requre("./component.js");
const CLI = require("./cli.js")

class Header extends Component {
    constructor (children= []) {
        this.children = children;
    }
    render() {
        
    }
}

module.exports = Header;