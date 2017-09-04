import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  handleClickButton(){

    this.setState({list: [{name:"kyeongrok"}]});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <button onClick={()=>this.handleClickButton()}>digitec</button>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
