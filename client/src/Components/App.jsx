import React from 'react';
import axios from 'axios';
const RandomOrg = require('random-org');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number:[],
    };
    this.getNumber = this.getNumber.bind(this);
  }

  componentDidMount() {
    
  }

  getNumber() {
    const random = new RandomOrg({ apiKey: '7188c32e-e68e-4c2f-8539-ad019c187edc' });
    const options = {
      n: 3,
      min: 0,
      max: 255
    }
    random.generateIntegers(options)
      .then((result) => {
        console.log(result.random.data)
      })
  }

  createImage(num1, num2, num3) {

  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    
    return (
      <div>
        <h1>Generate RGB Image</h1>
        <button type="button" onClick={this.getNumber}>generate number</button>
        <div></div>
      </div>
    );
  }
}

export default App;

