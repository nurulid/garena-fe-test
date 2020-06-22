import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Partner = ({ dataUniv, dataFaculty, univ, fakul }) => {
  // console.log("nurul dataUniv " + dataUniv);
  // console.log("nurul dataFaculty " + dataFaculty);

  // const newUniv = dataUniv.map((t1) => ({ ...t1, ...dataFaculty.find((t2) => t2.id === t1.id) }));

  // console.log(
  //   dataUniv.map(t1 => ({...t1, ...dataFaculty.find(t2 => t2.id === t1.id)}))
  // )

  // // const newUniv = dataUniv.map((x) => ({
  // //   fakultas: dataFaculty.filter((item) => item.univ_id === x.id),
  // //   ...x,
  // // }));
  // // // console.log(newUniv);

  // const [univ, setUniv] = useState(newUniv);
  // // console.log("nurul univ " + univ);

  // useEffect(() => {
  //   setUniv(newUniv);
  // }, [dataFaculty]);

  return (
    <section id="partner">
      <h2 className="section-title">Partner Universities</h2>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        className="carousel-custom"
      >
        {univ.map((item) => (
          <div key={item.id}>
            <div className="carousel-item">
              <div className="img-wrapper">
                <img src={item.univ_logo} alt={item.univ_name} />
              </div>
              <div className="carousel__desc">
                <div className="carousel__title">{item.univ_name}</div>
                <ul>
                {/* <li key={item.id}>{item.name}</li>; */}
                  { fakul.map((faculty) => {
                      return <li key={faculty.id}>{faculty.name}</li>;
                    })}
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
