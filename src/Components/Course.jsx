import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, img } = course;
  return (
    <div className="course">
      <div>
        <img src={img} height={250} />
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>{price}</h3>
        <a href={link}>GitHub</a>
      </div>
    </div>
  );
}

export default Course;
