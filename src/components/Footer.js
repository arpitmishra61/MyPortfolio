import React from 'react'

export default function Footer() {
    return (
        <div>
        <div className="contacts"
            id='contact'>
            <div className="container pb-4">

                <div className="row ">
                    <div className="col-lg-4 p-2 pr-4" style={{ borderRight: "1px solid rgb(75, 75, 75)" }}>
                        <div className="text-center ">

                            <hr />
                            <img src={require("../gallary/transfer.png")} style={{ height: "64px" }} className="rimg" alt="none" />

                        </div>
                        <h5 className="p-2" style={{ color: "rgb(75, 200, 250)" }}>Contact Me</h5>
                        <li className="list-group-item  mb-2 mt-2 ">
                            <span>
                                <i className="fas fa-envelope text-light bg-danger p-2
                                mr-2 rounded-circle "></i>
                            </span><span>arpitmishra61@gmail.com</span>
                        </li>
                        <li className="list-group-item mb-2">
                            <span>
                                <i className="fab fa-linkedin text-light bg-primary px-2 py-2
                                mr-2 
                                rounded-circle "></i>
                            </span>
                            <a href="https://www.linkedin.com/in/arpit-mishra-57456917b/" className='text-light' target="_blank">Click Here</a>   </li>
                        <li className="list-group-item mb-2 ">
                            <span>
                                <i className="fab fa-instagram text-light  p-2 rounded-circle mr-2" style={{backgroundColor:'#bd09a8'}}></i>
                            </span><span>instagram/arpitmishra61</span>
                        </li>
                    </div>
                    <div className="col-lg-4 p-2 pr-4 text-center text-white" style={{ borderRight: '2px solid rgb(75, 75, 75)' }}>

                        <hr />
                        <img src={require("../gallary/target.png")} style={{ height: "64px" }} className="rimg" alt="none" />
                        <h5 className="  p-2" style={{ color: "rgb(75, 200, 250)" }}>Arpit Mishra</h5>
                        Iam a <strong>Full Stack</strong> , self taught web developer.

                                 Currently actively working in field of <strong>
                                            MERN STACK and Django.
                                </strong>
                               
                              
                    </div>
                    <div className="col-lg-4 p-2 text-center flinks">


                        <hr />
                        <img src={require("../gallary/link.png")} alt="none" className="rimg" />

                        <h5 className="  p-2" style={{ color: "rgb(75, 200, 250)" }}>Important Links</h5>
                        <div className="mt-4"> <a href="https://github.com/arpitmishra61" className="btn btn-outline-light" target='_blank'>Git Repo</a>
                            <a href="https://www.hackerrank.com/arpitmishra61?h_r=internal-search&hr_r=1" 
                            target='_blank'className="btn btn-outline-light">Hacker Rank Profile</a>
                            <a href="#projects" className="btn btn-outline-light">Live Projects</a>
                            <a href="#skills" className="btn btn-outline-light">Skills</a>
                        </div>
                       

                    </div>
                </div>
            </div>

            
        </div>

<footer class="bg-dark text-light p-4 text-center" id='footer'>

<p class="p-2 mt-2">
    Arpit Mishra &copy; 2019-Present
</p>

</footer>
</div>

    )
}
