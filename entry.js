console.log("test");
import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
      return <div>
                  <h1>Hello, {props.name}</h1>
                  <div>Jajo {props.kajo}</div>
               </div>;
}

const element = <Welcome name="Sara" kajo="bajo"/>;
ReactDOM.render(
  element,
    document.getElementById('root')
    );
