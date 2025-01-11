import React from 'react'
import C1 from '../../Images/Carousal/C1.jpg'
import C2 from '../../Images/Carousal/C2.jpg'
import C3 from '../../Images/Carousal/C3.jpg'
export default function Carousal() {
  return (
    <div>
        <div className="row">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={C1} class="d-block w-100 " alt="..." height="440px"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={C2} class="d-block w-100 " alt="..." height="440px"/>
    </div>
    <div class="carousel-item">
      <img src={C3} class="d-block w-100 " alt="..." height="440px" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}
