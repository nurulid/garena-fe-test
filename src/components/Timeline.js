import React from "react";
import Timeline1 from "../img/Timeline-1.png";
import Timeline2 from "../img/Timeline-2.png";
import Timeline3 from "../img/Timeline-3.png";
import Timeline4 from "../img/Timeline-4.png";

const Timeline = ({ data }) => {
  return (
    <section id="timeline">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-list">
        {data.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="title">Registration</div>
            <div className="img-wrapper">
              <img src={Timeline1} alt="Timeline 1" />
            </div>
            <div className="date">{item.date_regis}</div>
          </div>
        ))}
        {data.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="title">Essay and CV Screening</div>
            <div className="img-wrapper">
              <img src={Timeline2} alt="Timeline 2" />
            </div>
            <div className="date">{item.date_esay_cvscreen}</div>
          </div>
        ))}
        {data.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="title">On-campus Interview</div>
            <div className="img-wrapper">
              <img src={Timeline3} alt="Timeline 3" />
            </div>
            <div className="date">{item.date_interview}</div>
          </div>
        ))}
        {data.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="title">Announcement of Selected Scholars</div>
            <div className="img-wrapper">
              <img src={Timeline4} alt="Timeline 4" />
            </div>
            <div className="date">{item.date_announce }</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
