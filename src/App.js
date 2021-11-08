import React, { Component } from 'react';
import BF from './BF.js'
import Logo from './Logo.js'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      funding: 0
    }
  }

  funding = (currentFunding) => {
    this.setState({funding: currentFunding})
  }

  render() {

    const limits = {
      week1: 500,
      week2: 1000,
      week3: 2000,
      week4: 3000
    }

    const week1 = `Funding-block ${this.state.funding > limits.week1 ? "completed" : ""}`;
    const week2 = `Funding-block ${this.state.funding > limits.week2 ? "completed" : ""}`;
    const week3 = `Funding-block ${this.state.funding > limits.week3 ? "completed" : ""}`;
    const week4 = `Funding-block ${this.state.funding > limits.week4 ? "completed" : ""}`;

    return (
      <div className="App">
        <BF
          getStatus={this.funding}
          />
        <header className="App-header">
          <Logo />
          <div className="App-funding">
            <div className={week1}><p>Vecka 1</p><p>{limits.week1} kr</p></div>
            <div className={week2}><p>Vecka 2</p><p>{limits.week2} kr</p></div>
            <div className={week3}><p>Vecka 3</p><p>{limits.week3} kr</p></div>
            <div className={week4}><p>Vecka 4</p><p>{limits.week4} kr</p></div>
          </div>
          <div className="Total-funding">
            <h3>Totalt insamlat: {this.state.funding} kr</h3>
            <a className="Funding-link" href="https://egeninsamling.brostcancerforbundet.se/gava/5-17285">Till insamlingen - för att behålla mustascherna!</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
