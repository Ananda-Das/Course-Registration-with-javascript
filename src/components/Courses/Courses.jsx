import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleEnroll }) => {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setcourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {courses.map((course) => (
        <Course key={course.id} handleEnroll={handleEnroll} course={course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleEnroll: PropTypes.func,
};

export default Courses;
