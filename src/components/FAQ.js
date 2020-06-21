import React from 'react'

const FAQ = ({ data }) => {
  return (
    <section id="faq">
      <h2 className="section-title">FAQ</h2>
      {data.map((item)=> (
        <div key={item.id} dangerouslySetInnerHTML={{ __html: item.faq_content }} className="faq-list"/>
      ))}
    </section>
  );
}

export default FAQ;
