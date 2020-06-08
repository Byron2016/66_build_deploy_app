import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 3,
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

  render() {
    return (
      <div className="App">
    <Output value = {
      this.state.text
    } />

    </div>
    );
  }
}

export default App;