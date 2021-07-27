import React from "react";
import Slider from "react-slick";

export default function SliderDiv() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        automaticPlay: true,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>


            <div>
                <div class="card box-shadow" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i> <b>Pr kumar</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

            <div>
                <div class="card box-shadow" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i> <b>N.Reddy</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

            <div>
                <div class="card box-shadow" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i> <b>sagar kumar</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

            <div>
                <div class="card box-shadow" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i><b> N.Narayan</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>
            <div>
                <div class="card box-shadow" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i> <b>Harish</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body text-dark">
                        <p class="card-title"> <i class="far fa-user"></i> <b>R.Kumaran</b></p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

        </Slider>
    );
}