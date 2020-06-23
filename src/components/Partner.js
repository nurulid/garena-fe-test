import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Partner = ({ newUniv }) => {
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
        {newUniv.map((univ) => (
          <div key={univ.id}>
            <div className="carousel-item">
              <div className="img-wrapper">
                <img src={univ.univ_logo} alt={univ.univ_name} />
              </div>
              <div className="carousel__desc">
                <div className="carousel__title">{univ.univ_name}</div>
                <ul>
                  {/* { fakul.map((faculty) => {
                      return <li key={faculty.id}>{faculty.name}</li>;
                    })} */}
                  {univ &&
                    univ.fakultas.map((item) => {
                      return (
                        <li key={item.id}>
                          {item.name}
                        </li>
                      );
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
