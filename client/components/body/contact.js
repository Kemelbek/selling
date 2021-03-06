import React from 'react';

const Dummy = () => {
  // const mystyle = {
  //   backgroundImage: 'url(/images/hero_2.jpg)',
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'top'
  // }
  return (
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">Contact Form</h3>
            <h2 className="section-title mb-3">Get In Touch</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 mb-5">
            <form action="#" className="p-5 bg-white">

              <h2 className="h4 text-black mb-5">Contact Form</h2>

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" className="form-control rounded-0" />
                </div>
                <div className="col-md-6">
                  <label className="text-black" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" htmlFor="subject">Subject</label>
                  <input type="subject" id="subject" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control rounded-0"
                    placeholder="Write your notes or questions here..."
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-black rounded-0 py-3 px-4" />
                </div>
              </div>


            </form>
          </div>

        </div>

      </div>
    </div>
  )
}


export default Dummy
