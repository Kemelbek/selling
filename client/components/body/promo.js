import React from 'react';

const Dummy = () => {
  const mystyle = {
    backgroundImage: 'url(/images/hero_2.jpg)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top'
  }
  return (
    <div className="site-blocks-cover overlay get-notification" id="special-section" style={mystyle} data-aos="fade">
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 text-center">
            <h3 className="section-sub-title">Special Promo</h3>
            <h3 className="section-title text-white mb-4">Summer Sale</h3>
            <p className="mb-5 lead">Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

            <div id="date-countdown" className="mb-5" />

            <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Dummy
