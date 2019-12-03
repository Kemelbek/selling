import React from 'react';


const Dummy = () => {
  // const mystyle = {
  //   backgroundImage: 'url(/images/hero_2.jpg)'
  // }
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6 text-center">
            <h3 className="section-sub-title">Awesome Products</h3>
            <h2 className="section-title mb-3">Featured Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
        </div>
        <div className="bg-white py-4 mb-4">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0">
              <img src="/images/model_1_bg.jpg" alt="ph" className="img-fluid" />
            </div>

            <div className="col-md-5 ml-auto product-title-wrap">
              <span className="number">01.</span>
              <h3 className="text-black mb-4 font-weight-bold">About This Product</h3>
              <p className="mb-4">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

              <div className="mb-4">
                <h3 className="text-black font-weight-bold h5">Price:</h3>
                <div className="price"><del className="mr-2">$269.00</del> $69.00</div>
              </div>
              <p>
                <a href="#" className="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">View Details</a>
                <a href="#" className="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-4">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
              <img src="/images/product_1_bg.jpg" alt="ph" className="img-fluid" />
            </div>

            <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
              <span className="number">02.</span>
              <h3 className="text-black mb-4 font-weight-bold">About This Product</h3>
              <p className="mb-4">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

              <div className="mb-4">
                <h3 className="text-black font-weight-bold h5">Price:</h3>
                <div className="price"><del className="mr-2">$269.00</del> $69.00</div>
              </div>
              <p>
                <a href="#" className="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">View Details</a>
                <a href="#" className="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Dummy
