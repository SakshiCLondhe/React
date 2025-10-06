import React, { Component, useState, useEffect } from "react";

// 🔹 Class Component
class ClassComponent extends Component {
  constructor(props) {////property passed from the parent component to this component 
    super(props);//parent class constructor
    this.state = { message: "Hello from Class Component!" };// initial state of component 
  }

  /*componentDidMount() {
    console.log("ClassComponent Mounted");
  }*/

  handleClick = () => {
    this.setState({ message: "Button clicked in Class Component!" });
  };

  render() {
    return (
      <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Click Me (Class)</button>
      </div>
    );
  }
}

// 🔹 Function Component
function FunctionComponent() {
  const [message, setMessage] = useState("Hello from Function Component!");

  useEffect(() => {
    console.log("FunctionComponent Mounted");
  }, []);

  const handleClick = () => {
    setMessage("Button clicked in Function Component!");
  };

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me (Function)</button>
    </div>
  );
}

// 🔹 Main App Component
function App() {
  return (
    <div>
      <h1>React Component Types</h1>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
