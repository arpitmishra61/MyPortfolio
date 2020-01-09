import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light  navbar-expand-xlg border-bottom-info fixed-top bg-white py-4 bg-dark"
                style={{ borderBottom: '0.5px solid rgba(36, 36, 36, 0.808)' }}>
                <div className="container">

                    <a href="/" className="navbar-brand">
                        <img src={require('../gallary/Logo1.jpg')} alt="" />
                    </a>
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="dark-blue-text"><i
                            className="fas fa-bars fa-1x"></i></span></button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item"><a href="#home" className="nav-link active">
                                <i className='fas fa-home bg-info p-2 rounded-circle text-light'></i>
                                Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link">
                                <i className='fas fa-info-circle rounded-circle bg-success'></i>
                                About</a></li>
                            <li className="nav-item"><a href="#skills" className="nav-link"><i className='fab fa-creative-commons-share rounded-circle bg-danger'></i>Skills  </a></li>
                            <li className="nav-item"><a href="#localprojects" className="nav-link page-scroll"> <i className='fas fa-tasks rounded-circle bg-warning'></i>Projects</a></li>
                            <li className="nav-item"><a href="#achievements" className="nav-link"><i className='fas fa-crown rounded-circle '
                                style={{ backgroundColor: 'orangered' }}></i>Achievements  </a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link"><i className='fas fa-address-book rounded-circle' style={{ backgroundColor: 'purple' }}></i>Contact Me  </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ height: "60px" }} id='home'></div>
        </div>
    )
}
