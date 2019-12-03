import React from 'react';

const Dummy = () => {
  const mystyle = {
    position: 'relative',
    top: '2px'
    // backgroundColor: 'black'
  }
  return (
    <div className="top-bar py-3 bg-light" id="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-left">
            <ul className="social-media">
              <li><a href="#" className="" label="Something"><span className="icon-facebook" /></a></li>
              <li><a href="#" className="" label="Something"><span className="icon-twitter" /></a></li>
              <li><a href="#" className="" label="Something"><span className="icon-instagram" /></a></li>
              <li><a href="#" className="" label="Something"><span className="icon-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-6">
            <p className="mb-0 float-right">
              <span className="mr-3"><a href="tel://#"><span className="icon-phone mr-2" style={mystyle} /><span className="d-none d-lg-inline-block text-black">(+1) 234 5678 9101</span></a></span>
              <span><a href="#"><span className="icon-envelope mr-2" style={mystyle} /><span className="d-none d-lg-inline-block text-black">shop@yourdomain.com</span></a></span>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dummy
