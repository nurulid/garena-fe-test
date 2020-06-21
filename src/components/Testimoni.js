import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimoni = ({ dataTestimoni }) => {
  return (
    <section id="partner">
      <h2 className="section-title">Testimonials</h2>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        swipeable={true}
        className="carousel-custom"
      >
        {dataTestimoni.map((item) => (
          <div key={item.id}>
            <div className="carousel-item carousel-item--testi">
              <div className="img-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="carousel__desc carousel__desc--testi">
                <div className="carousel__detail">{item.story}</div>
                <div className="carousel__title">{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimoni;
