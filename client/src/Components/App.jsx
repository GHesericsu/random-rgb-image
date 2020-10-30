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
        
        this.setState({
          numbers: result.random.data,
        })
        console.log(this.state.numbers)
      })
  }

  createImage(arr) {
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
        })
        console.log(this.state.numbers)
      })
      .catch((err) => {
        console.log(err)
      })
    const rgbString = `rgb(${arr[0], arr[1], arr[2], 1})`;
    console.log(rgbString)
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = rgbString;
    ctx.fillRect(10, 10, 120, 120);
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    
    return (
      <div>
        <h1>Generate RGB Image</h1>
        <button type="button" onClick={this.getNumber}>generate number</button>
        <button type="button" onClick={this.createImage}>Create Image</button>
        <div>
          Image
        </div>
      </div>
    );
  }
}

export default App;

