import React from "react";
import ImgFreshmen from "../img/icon-freshmen.png";
import ImgSenior from "../img/icon-senior.png";

const Program = ({ firstData }) => {
  return (
    <section id="program">
      <h2 className="section-title">Undergraduate Scholarship Program</h2>
      <p dangerouslySetInnerHTML={{ __html: firstData.program_content }} className="section-desc" />
      <div className="card-list-wrapper">
        <div className="card__item">
          <div className="img-wrapper">
            <img src={ImgFreshmen} alt="" />
          </div>
          <div className="card__title">Sea Freshmen Scholarship Program</div>
          <p
            dangerouslySetInnerHTML={{ __html: firstData.freshman_program }}
            className="card__detail"
          />
        </div>
        <div className="card__item">
          <div className="img-wrapper">
            <img src={ImgSenior} alt="" />
          </div>
          <div className="card__title">Sea Senior Scholarship Program</div>
          <p
            dangerouslySetInnerHTML={{ __html: firstData.freshman_program }}
            className="card__detail"
          />
        </div>
      </div>
    </section>
  );
};

export default Program;
