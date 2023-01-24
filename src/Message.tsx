//PascalCasing
function Message() {
    //JSX - Javascript XML - will be complied in JS. In babeljs.io/repl, try how it got converted to JS.
    //<h1>Hello World</h1> --> React.createElement("h1", null, "Hello World"); //JS Code
    const name = 'Bhawesh';
    return <h1>Hello {name}</h1>;
}

export default Message;