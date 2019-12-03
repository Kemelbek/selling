import React from 'react';

const Dummy = () => {
  // const mystyle = {
  //   backgroundImage: 'url(/images/hero_2.jpg)',
  //   backgroundAttachment: 'fixed'
  // }
  return (
    <div className="site-section" id="about-section">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-8 mb-5 mb-lg-0 position-relative">
            <img src="/images/about_1.jpg" className="img-fluid" alt="ph" />
            <div className="experience">
              <span className="year">Trusted Merchant</span>
              <span className="caption">for 50 years</span>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <h3 className="section-sub-title">Merchant Company</h3>
            <h2 className="section-title mb-3">About Us</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
            <p><a href="#" className="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Dummy
