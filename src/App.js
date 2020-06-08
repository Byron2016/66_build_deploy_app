import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 2,
      html: true,
      text: '',
    }
  }

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    // axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    axios.get('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&type=hipster-centric&format=' + this.state.html)
      //https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html
      .then((response) => {
        this.setState({ text: response.data }, function() {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  showHtml(x){
    this.setState({html: x}, this.getSampleText);
  }

  changeParas(number){
    this.setState({paras: number}, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
      <h1 className="text-center">ReactJS Sample Text Generator</h1>
      <hr />
      <form className="form-inline">
        <div className="form-group">
          <label>- Paragrahps:</label>
          <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
        </div>
        <div className="form-group">
          <label>- Include HTML:</label>
          <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
        </div>
      </form>
      <br /><br />
        <Output value = {
          this.state.text
        } />

    </div>
    );
  }
}

export default App;