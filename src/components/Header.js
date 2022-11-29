import React from "react";

export default function Header() {
    return (
        <header className="bg-dark py-1">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Living Tech</h1>
                    <p className="lead fw-normal text-white-50 mb-0">The Best You Can Get</p>
                    <div className="container-lg my-3">
                        <div id="myCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./images/pexels-pixabay-38568.jpg" className="w-50" alt="Slide 1"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/pexels-pixabay-414548.jpg" className="w-50" alt="Slide 2"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/pexels-roberto-nickson-3082341.jpg" className="w-50" alt="Slide 3"></img>
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}