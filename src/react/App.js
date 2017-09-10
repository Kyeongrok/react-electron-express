import React, {Component} from 'react';
import './common/css/App.css';
import {Grid, Row, Panel, Table, Button, FormControl, Col, Label} from 'react-bootstrap';
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
    this.setState({responseStatus: "request", list:[]});
    const params = {
      "requstItemNumber" : this.state.requestItemNumberDigitec,
    }
    console.log(params);
    axios.get('http://localhost:1987/digitec', {params})
      .then( (response) => {
        console.log(response);
        this.setState({list: response.data.list, responseStatus: "ok"});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChangeItemNumber(event){
    console.log(event.target.value);
    this.setState({requestItemNumberDigitec:event.target.value});
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Panel>
              <Col xs={12} md={3}>
                <Label>Digitec</Label>
              </Col>
              <Col xs={12} md={3}>
                <FormControl
                  type="text"
                  value={this.state.requestItemNumberDigitec}
                  onChange={(event)=>this.handleChangeItemNumber(event)} />
              </Col>
              <Col xs={12} md={3}>
                <Button bsStyle="primary" onClick={() => this.handleClickButton()}>불러오기</Button>
              </Col>
              <Col xs={12} md={3}>
                <Label>{this.state.responseStatus}</Label>
              </Col>


            </Panel>
            <Panel>
              {this.state.responseStatus==='request'?<Progress logoText={"Loading..."}/>:null}
              {this.state.responseStatus==='ok'?<ProductInfoTable data={this.state.list} />:null}
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

class TrProduct2 extends Component {
  render(){
    console.log(this.props.item);
    return(
      <tr key={Math.random()}>
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
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <td>제품명</td>
            <td>가격</td>
            <td>세일가</td>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(item =><TrProduct2 item={item}/> )}
        </tbody>
      </Table>
    )
  }
}
export default App;
