import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await axios.get('/api');
      this.setState(() => ({
        data: response.data,
      }));
    } catch (err) {
      console.log(err);
    }
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        TEST TEST TEST
      </div>
    );
  }
}

export default App;

