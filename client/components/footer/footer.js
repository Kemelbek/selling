import React from 'react';

const Dummy = () => {
  // const mystyle = {
  //   backgroundImage: 'url(/images/hero_2.jpg)',
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'top'
  // }
  return (
    <footer className="site-footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div className="col-md-3 ">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3" label="text"><span className="icon-facebook" /></a>
                <a href="#" className="pl-3 pr-3" label="text"><span className="icon-twitter" /></a>
                <a href="#" className="pl-3 pr-3" label="text"><span className="icon-instagram" /></a>
                <a href="#" className="pl-3 pr-3" label="text"><span className="icon-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <h2 className="footer-heading mb-4">Featured Product</h2>
            <a href="#"><img src="images/product_1_bg.jpg" alt="ph" className="img-fluid mb-3" /></a>
            <h4 className="h5">Leather Brown Shoe</h4>
            <strong className="text-black mb-3 d-inline-block">$60.00</strong>
            <p><a href="#" className="btn btn-black rounded-0">Add to Cart</a></p>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright ;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" label="text">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}


export default Dummy
