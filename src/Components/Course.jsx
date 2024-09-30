import React from "react";
import "../css/Course.css";

function Course({ course }) {
  const { id, title, description, price, link, img } = course;
  return (
    <div className="course">
      <div className="inner-course">
        <img className="course-img" src={img} height={300} />
        <h1 className="course-title">{title}</h1>
        <p className="course-paragraph">{description}</p>
        <button className="course-price-btn">{price}</button>
        <a className="course-link" href={link}>
          GitHub: Photmanai
        </a>
      </div>
    </div>
  );
}

export default Course;
