import React from 'react';

const Dummy = () => {
  // const mystyle = {
  //   backgroundImage: 'url(/images/hero_2.jpg)',
  //   backgroundAttachment: 'fixed'
  // }
  return (
    <div className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">Team</h3>
            <h2 className="section-title mb-3">Leadership</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="person text-center">
              <img src="images/person_2.jpg" alt="ph" className="img-fluid rounded w-75 mb-3" />
              <h3>John Rooster</h3>
              <p className="position text-muted">Co-Founder, President</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#" label="text"><span className="icon-facebook" /></a></li>
                <li><a href="#" label="text"><span className="icon-twitter" /></a></li>
                <li><a href="#" label="text"><span className="icon-linkedin" /></a></li>
                <li><a href="#" label="text"><span className="icon-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="person text-center">
              <img src="images/person_3.jpg" alt="phe" className="img-fluid rounded w-75 mb-3" />
              <h3>Tom Sharp</h3>
              <p className="position text-muted">Co-Founder, COO</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#" label="text"><span className="icon-facebook" /></a></li>
                <li><a href="#" label="text"><span className="icon-twitter" /></a></li>
                <li><a href="#" label="text"><span className="icon-linkedin" /></a></li>
                <li><a href="#" label="text"><span className="icon-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div className="person text-center">
              <img src="images/person_4.jpg" alt="phe" className="img-fluid rounded w-75 mb-3" />
              <h3>Winston Hodson</h3>
              <p className="position text-muted">Marketing</p>
              <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              <ul className="ul-social-circle">
                <li><a href="#" label="text"><span className="icon-facebook" /></a></li>
                <li><a href="#" label="text"><span className="icon-twitter" /></a></li>
                <li><a href="#" label="text"><span className="icon-linkedin" /></a></li>
                <li><a href="#" label="text"><span className="icon-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dummy
