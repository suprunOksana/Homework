import React, {Component} from 'react';
import img from './image/img.jpg';

class App extends Component {
  render() {
    return  <div>
       <h1>Hello!</h1>
      <img src={img}/>
      </div>
  }
}

export default App; 