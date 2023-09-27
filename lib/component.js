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
                newArray.push(children[i].render())

            }
        }
    }
} 
module.exports = Component;