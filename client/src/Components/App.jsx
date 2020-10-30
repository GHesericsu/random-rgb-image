import React from 'react';
import axios from 'axios';
const RandomOrg = require('random-org');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers:[],
    };
    this.getNumber = this.getNumber.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    
  }

  handleClick() {
    this.getNumber();
  }

  getNumber() {
    const random = new RandomOrg({ apiKey: '7188c32e-e68e-4c2f-8539-ad019c187edc' });
    const options = {
      n: 3,
      min: 0,
      max: 255,
    };
    random.generateIntegers(options)
      .then((result) => {
        this.setState({
          numbers: result.random.data,
        });
        this.createImage(result.random.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createImage(numArr) {
    console.log('createimage arr', numArr)
    const rgbString = `rgb(${numArr[0]}, ${numArr[1]}, ${numArr[2]}, 1)`;
    console.log('createImage',rgbString);
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = rgbString;
    ctx.fillRect(10, 10, 120, 120);
  }

  
  render() {
    console.log('state', this.state.numbers)
    return (
      <div>
        <h1>Generate RGB Image</h1>
        <button type="button" onClick={this.handleClick}>Create Image</button>
        <div>
          Image
        </div>
      </div>
    );
  }
}

export default App;

