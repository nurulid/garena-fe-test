import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Partner = ({ dataUniv, dataFaculty }) => {
  return (
    <section id="partner">
      <h2 className="section-title">Partner Universities</h2>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        swipeable={true}
        className="carousel-custom"
      >
        {dataUniv.map((item) => (
          <div key={item.id}>
            <div className="carousel-item">
              <div className="img-wrapper">
                <img src={item.univ_logo} alt={item.univ_name} />
              </div>
              <div className="carousel__desc">
                <div className="carousel__title">{item.univ_name}</div>
                <ul>
                  {dataFaculty
                    .filter((row) => row.univ_id === item.id)
                    .map((faculty) => (
                      <li className="carousel__detail">{faculty.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Partner;
