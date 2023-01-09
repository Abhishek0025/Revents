import React from "react"; // In order to return jsx, import React everytime

function App() { // In React, we write a function and return jsx. Class is not used but clasName is used. 
  const title = React.createElement('h1', {}, 'Revents no JSX')
  const div = React.createElement('div',{className: 'App'},title)
  // return (
  //   <div className="App">
  //     <h1>Re-vents</h1>
  //   </div>
  // );

  // OR

  return(
    div
  )
}

export default App;
