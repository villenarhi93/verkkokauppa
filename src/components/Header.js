import React from "react";

export default function Header() {
    return (
        <header class="bg-dark py-1">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Living Tech</h1>
                <p class="lead fw-normal text-white-50 mb-0">The Best You Can Get</p>
 
  
      <div class="container-lg my-3">
          <div id="myCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
           
          <ol class="carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>
          
          
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="./images/pexels-pixabay-38568.jpg" class="w-50" alt="Slide 1"></img>
                  <div class="carousel-caption d-none d-md-block">
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="./images/pexels-pixabay-414548.jpg" class="w-50" alt="Slide 2"></img>
                  <div class="carousel-caption d-none d-md-block">
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="./images/pexels-roberto-nickson-3082341.jpg" class="w-50" alt="Slide 3"></img>
                  <div class="carousel-caption d-none d-md-block">
                  </div>
              </div>
          </div>
  
          
          <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
          </a>
      </div>
          </div>
            </div>
        </div>
    </header>
    )
}