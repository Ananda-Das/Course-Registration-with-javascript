import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {

  const [courses, setcourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setcourses(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">Course Length: {courses.length}</h1>
    </div>
  );
};

export default Courses;
