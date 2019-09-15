import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Trang chủ</h1>
        <iframe title="myFrame" className='full'
          src="https://www.youtube.com/embed/-FpMTxXJ6y4?autoplay=true"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Home;
