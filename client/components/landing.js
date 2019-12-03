import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Header from './header/header'
import Navbar from './header/navbar'
import HeaderSocial from './header/header_social'
import TopBody from './body/top_body'
import ProductsBody from './body/products_body'
import SubscribeBody from './body/subscribe_body'
import FeaturedBody from './body/featured_body'
import About from './body/about'
import Team from './body/team'
import Promo from './body/promo'
import Advantage from './body/advantage'
import Feedback from './body/feedback'
import Blog from './body/blog'
import Contact from './body/contact'
import Footer from './footer/footer'

const Dummy = () => {
  return (
    <div className="site-wrap">
      <Header />
      <HeaderSocial />
      <Navbar />
      <TopBody />
      <ProductsBody />
      <SubscribeBody />
      <FeaturedBody />
      <About />
      <Team />
      <Promo />
      <Advantage />
      <Feedback />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
