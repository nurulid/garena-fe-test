import React from "react";
import HeadImage from "../img/icon-graduate.png";
import "../scss/_head-banner.scss";

const Head = () => {
  return (
    <section id="head">
      <div className="container">
        <div className="head-wrapper">
          <div className="content">
            <h1 className="title">Congratulation Sea Scholarship 2019 Awardees!</h1>
            <h5 className="subtitle">
              The Sea Shcolarship Committee is proud to announce the 2019 Academic Year Sea
              Scholarship recipients. Final Award email notification were sent on October 17, 2019
            </h5>
          </div>
          <div className="image">
            <img src={HeadImage} alt="Icon Graduation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
