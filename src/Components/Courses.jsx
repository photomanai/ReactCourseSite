import React from "react";
import Course from "./Course";
import { courses } from "../Data";
import "../css/Courses.css";

function Courses() {
  return (
    <div className="courses">
      {courses?.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
}

export default Courses;
