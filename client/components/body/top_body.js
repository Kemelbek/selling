import React from 'react';


const Dummy = () => {
  const mystyle = {
    backgroundImage: 'url(/images/hero_2.jpg)'
  }
  return (
    <div className="site-blocks-cover overlay" style={mystyle} data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center">

          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">

            <div className="row mb-4">
              <div className="col-md-7">
                <h1>Shop With Us</h1>
                <p className="mb-5 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                <div>
                  <a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a>
                  <a href="#" className="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Club Membership</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dummy
