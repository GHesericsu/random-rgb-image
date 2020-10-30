/* eslint-disable class-methods-use-this */
import React from 'react';
const RandomOrg = require('random-org');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
    };
    this.getNumber = this.getNumber.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
        this.createImage(result.random.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createImage(numArr) {
    const rgbString = `rgb(${numArr[0]}, ${numArr[1]}, ${numArr[2]}, 1)`;
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = rgbString;
    ctx.fillRect(10, 10, 120, 120);
  }

  handleClick() {
    this.getNumber();
  }

  saveImage() {
    const link = document.createElement('a');
    const canvas = document.getElementById('myCanvas');
    const dataURL = canvas.toDataURL('image/png');
    const url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
    link.setAttribute('download', 'rgbimage.png');
    link.setAttribute('href', url);
    link.click();
  }

  render() {
    return (
      <div>
        <h1>Generate RGB Image</h1>
        <button type="button" onClick={this.handleClick}>Generate New Image</button>
        <div>
          <button type="button" onClick={this.saveImage}>Save Image</button>
        </div>
      </div>
    );
  }
}

export default App;
