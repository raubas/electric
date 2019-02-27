import React, { Component } from 'react';
import YT from './YT.js'
import Logo from './Logo.js'
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      numberOfViews: 0
    }
  }
  
  views = (numberOfViews) => {
    this.setState({numberOfViews})
  }
  
  render() {
    const views = 1000000
    const toGo = 0
    // const views = this.state.numberOfViews
    // const toGo = 1000000 - this.state.numberOfViews
    return (
      <div className="App">
        <YT
          getViews={this.views}
          />
        <header className="App-header">
          <Logo />
          <p>Totalt antal visningar:</p>
          <h1>{views}</h1>
          <p>Visningar kvar:</p>
          <h1>{toGo}</h1>
        </header>
      </div>
    );
  }
}

export default App;
