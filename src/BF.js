import React, { Component } from 'react';
import Script from 'react-load-script'

class BF extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    const that = this

    // that.props.getStatus(1550)

    fetch(`https://egeninsamling.brostcancerforbundet.se/f/Collection/GetDynamicProperties/COL-5-17285?_=1636402490637`)
    .then(res => res.json())
    .then(data => {
      return that.props.getStatus(data.raisedAmount);
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return false;
  }
}

export default BF;
