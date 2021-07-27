const Footer = () => {
    return (
        <div className="container-fluid footer" style={{height:"28rem"}}>
            <div className="container d-flex flex-wrap">
                <div className="img">
                    <img src="./Image/Logo.png" alt="" />
                </div>
                <div className="list py-5">
                    <ul>
                        <li><b className="text-muted">FEATURED COURSES</b></li>
                        <li><a href="">Subscription</a></li>
                        <li><a href="">Blockchain</a></li>
                        <li><a href="">C</a></li>
                        <li><a href="">C++</a></li>
                        <li><a href="">Cyber Security</a></li>
                        <li><a href="">Machine Learning</a></li>
                        <li><a href="">MongoDB</a></li>
                        <li><a href="">Pygame</a></li>
                        <li><a href="">Python</a></li>

                    </ul>
                </div>
                <div className="list py-5">
                    <ul>
                        <li><b className="text-muted"> PLATFORM</b></li>
                        <li><a href=""> Affiliates</a></li>
                        <li><a href=""> Codekata</a></li>
                        <li><a href="">Course library</a></li>
                        <li><a href="">  Forum</a></li>
                        <li><a href=""> HYRE</a></li>
                        <li><a href="">IDE</a></li>
                        <li><a href="">MicroARC</a></li>
                        <li><a href="">  Project board</a></li>
                        <li><a href="">Rewards</a></li>
                        <li><a href=""> Webkata</a></li>
                    </ul>
                </div>
                <div className="list py-5">
                    <ul>
                        <li><b className="text-muted"> SOLUTION</b></li>
                        <li><a href=""> Corporate</a></li>
                        <li><a href=""> HackerKid</a></li>
                        <li><a href="">   Personal</a></li>
                        <li><a href="">Course library</a></li>
                        <li><a href=""> Zen Class</a></li>
                    </ul>
                </div>
                <div className="list py-5">
                    <ul>
                        <li><b className="text-muted"> COMPANY</b></li>
                        <li><a href=""> About us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href=""> FAQ</a></li>
                        <li><a href=""> Refund Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="social my-5">
                    <ul className="d-flex">
                        <li className="icons">
                            <i class="fab fa-instagram  fa-2x"></i>
                        </li>
                        <li className="icons">

                            <i class="fab fa-twitter fa-2x"></i>
                        </li>
                        <li className="icons">
                            <i class="fab fa-facebook-square fa-2x"></i>
                        </li>
                        <li className="icons">
                            <i class="fab fa-youtube fa-2x"></i>
                        </li>
                        <li className="icons">
                            <i class="fab fa-invision fa-2x"></i>
                        </li>

                    </ul>
                </div>
            </div>
            <hr />
            <div >
                <div className="footerBotom d-flex flex-wrap ">
                    <p className="mr-3"><img className=" m-0  p-0 pr-3" src="./Image/Glogo.png" style={{ width: "2rem", height: "2rem" }} alt="" /> <br /></p>
                    <p className="ml-3"><small className="text-muted "> Copyright 2014 - 2021 GUVI Geek Network Pvt Ltd., All rights reserved</small></p>
                </div>
            </div>
        </div>

    )
}

export default Footer;