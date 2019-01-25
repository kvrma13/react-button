import React, { Component } from 'react';
import './App.css';


class App extends Component {

   state = {
  clicks: 0 ,
  name: "clicks"
  } 

timesClicked = (a) =>{
   this.setState({
    clicks: this.state.clicks +1})
   
   if (this.state.clicks === 0){this.setState({
    name: "click"})
   } else {this.setState({
    name: "clicks"})
   }
  }

  render() {
    return (
            <div id="bttnbody">
              <button id="button" onClick={this.timesClicked}>{this.state.clicks} {this.state.name}</button>
            </div>
    );
  }
}

export default App;