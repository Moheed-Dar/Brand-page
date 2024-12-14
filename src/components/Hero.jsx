import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Hero() {
    return (
        <div className="Hero" >
            <div className="container mt-2">
                <div className="row ">
                <div className="col-md-6  m-0 order-md-1 order-sm-0 ">
                        
                            <img
                                id="shoe"
                                className="ps-2 pt-10 ms-4 "
                                src="/images/shoe_image2.png"
                                alt="Shoe Image"
                            />
                        
                    </div>
                    <div className="col-md-6   order-md-0 order-sm-1 ">
                        <p id="p1" className="text-[65px]  pt-3 ps-10" >YOUR FEET DESERVE THE BEST</p>
                        <p id="p2" className=' ps-10 pe-4' >
                            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        </p>
                        <div className='pt-2 ps-10 flex gap-2 '>
                            <button className=' btn btn-outline-danger' > Shop Now</button>
                            <button className='btn btn-outline-success' >Category</button>
                        </div>
                        <p id="p2" className='pt-2 ps-10 ' >Also Available On</p>
                        <div className=' flex gap-3 ps-10'>
                            <a href="https://www.flipkart.com" target="_blank">
                                <img src="/images/flipkart.png" alt="Flipkart Logo" />
                            </a>
                            <a href="https://www.amazon.com" target="_blank">
                                <img src="/images/amazon.png" alt="amazon logo" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Hero