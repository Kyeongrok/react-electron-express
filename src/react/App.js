import React, {Component} from 'react';
import './common/css/App.css';
import axios from 'axios';
import Progress from "./common/component/Progress";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      responseStatus:"ready",
      requestItemNumberDigitec:10
    };
  }
  handleClickButton() {
    this.setState({responseStatus: "request"});
    const params = {
      "requstItemNumber" : this.state.requestItemNumberDigitec,
    }
    axios.get('http://localhost:1987/digitec', params)
      .then( (response) => {
        console.log(response.data.list);
        this.setState({list: response.data.list, responseStatus: "ok"});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChangeItemNumber(evevt){
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" value={this.state.requestItemDigitec} onChange={(event)=>this.handleChangeItemNumber(event)} />
          <button onClick={() => this.handleClickButton()}>digitec</button>
          {this.state.responseStatus}
        </div>
        <p className="App-intro">
          product info crawler
        </p>
        {this.state.responseStatus==='request'?<Progress logoText={"Loading..."}/>:null}
        <ProductInfoTable data={this.state.list} />
      </div>
    );
  }
}

class TrProduct2 extends Component {
  render(){
    console.log(this.props.item);
    return(
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
        <td>{this.props.item.appendix}</td>
      </tr>
    )
  }
}
class ProductInfoTable extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <table>
        <thead>
          <th>
            <td>제품명</td>
            <td>가격</td>
            <td>세일가</td>
          </th>
        </thead>
        <tbody>
        {this.props.data.map(item =><TrProduct2 item={item}/> )}
        </tbody>
      </table>
    )
  }
}
export default App;
