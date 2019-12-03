import React from 'react';

const Dummy = () => {
  const mystyle = {
    position: 'relative',
    top: '3px'
    // backgroundColor: 'black'
  }
  return (
    <header className="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">

          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo"><a href="index.html" className="text-black mb-0">Selling<span className="text-primary">.</span> </a></h1>
          </div>
          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li><a href="#home-section" className="nav-link">Home</a></li>
                <li><a href="#products-section" className="nav-link">Products</a></li>
                <li><a href="#about-section" className="nav-link">About Us</a></li>
                <li><a href="#special-section" className="nav-link">Special</a></li>
                <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                <li><a href="#blog-section" className="nav-link">Blog</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>


          <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={mystyle}><a label="Shit" href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3" /></a></div>

        </div>
      </div>

    </header>
  )
}

export default Dummy
