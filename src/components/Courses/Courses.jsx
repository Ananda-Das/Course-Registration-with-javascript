import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

  const [courses, setcourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setcourses(data));
  }, []);

  return (
    <div className="flex gap-4 flex-wrap">
      {
        courses.map(course => <Course key={course.id} course={course} ></Course>)
      }
    </div>
  );
};

export default Courses;
