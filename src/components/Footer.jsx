import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>WeatherAPP</h2>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>Home</h3>
          <h3>City</h3>
          <h3>News</h3>
        </div>
        <div className="footer-column">
          <h3>FAQ</h3>
          <h3>Contact US</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer