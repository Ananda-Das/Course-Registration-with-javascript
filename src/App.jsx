import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Enrolls from "./components/Enrolls/Enrolls";
import Header from "./components/Header/Header";

function App() {
  const [enrolls, setEnrolls] = useState([]);
  const handleEnroll = (course) => {
    const newBookMarks = [...enrolls, course];
    setEnrolls(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="flex gap-3">
        <Courses handleEnroll={handleEnroll}></Courses>
        <Enrolls enrolls={enrolls} ></Enrolls>
      </div>
    </>
  );
}

export default App;
