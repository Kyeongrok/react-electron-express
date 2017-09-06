import React, {Component} from 'react';
import './common/css/App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  handleClickButton() {
    axios.get('http://localhost:1987/digitec')
      .then( (response) => {
        console.log(response.data.list);
        this.setState({list: response.data.list});
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({list: [{name: "kyeongrok"}]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" />
          <button onClick={() => this.handleClickButton()}>digitec</button>
        </div>
        <p className="App-intro">
          Hello Electron!

        </p>
        {this.state.list.map(item => <p key={item.name}>{item.name}</p>)}
      </div>
    );
  }
}

export default App;
