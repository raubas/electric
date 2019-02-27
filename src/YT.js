import React, { Component } from 'react';
import Script from 'react-load-script'

const API_KEY = ""
const VIDEO_ID = ''

class YT extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    const that = this
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      const views = data.items[0].statistics.viewCount
      that.props.getViews(views)
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return false;
  }
}

export default YT;
