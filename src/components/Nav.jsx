// Import Bootstrap styles and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-md bg-transparent fixed-top">
            <div className="container">
                {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                <img src="images/brand_logo.png" className="navbar-brand" />
                <button className="navbar-toggler border-0  shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="  offcanvas-header">
                        <img src="images/brand_logo.png" className="offcanvas-title" id="offcanvasNavbarLabel"></img>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-lg-row flex-md-row flex-column   ">
                        <ul className="navbar-nav text-xl text-black justify-content-center  items-center flex-grow-1 pe-3">
                            <li className="nav-item ">
                                <a className="nav-link mx-2  " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Project</a>
                            </li>
                        </ul>
                        <div className='d-flex flex-md-row flex-column flex-lg-row justify-center items-center'>
                            <a href="#" className='text-black px-2  text-decoration-none'>Login</a>
                            <button className="bg-red-400 rounded-lg px-3  py-1 text-decoration-none" >Sign In</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default Nav;
