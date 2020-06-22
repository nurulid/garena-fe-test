import React from "react";

const FAQ = ({ firstData }) => {
  return (
    <section id="faq">
      <h2 className="section-title">FAQ</h2>
      <div dangerouslySetInnerHTML={{ __html: firstData.faq_content }} className="faq-list" />
    </section>
  );
};

export default FAQ;
