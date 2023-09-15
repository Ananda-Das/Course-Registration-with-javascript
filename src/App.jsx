import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Enrolls from "./components/Enrolls/Enrolls";
import Header from "./components/Header/Header";

function App() {
  const [enrolls, setEnrolls] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);

  // const maxCredit = 20;

  const handleEnroll = (enroll) => {
    const isEnroll = enrolls.find((item) => item.id === enroll.id);

    let totalCredit = enroll.credit;

    if (isEnroll) {
      alert("already added");
    } else {
      enrolls.forEach((item) => {
        totalCredit = totalCredit + item.credit;
      });

      const remainingCredit = 20 - totalCredit;


      if (totalCredit > 20) {
        alert("Max Credit Enrolled!");
      } else {
        const newEnroll = [...enrolls, enroll];
        setEnrolls(newEnroll);
        setTotalCredit(totalCredit);
        setRemainingCredit(remainingCredit);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex gap-3">
        <Courses handleEnroll={handleEnroll}></Courses>
        <Enrolls enrolls={enrolls} totalCredit={totalCredit} remainingCredit={remainingCredit}></Enrolls>
      </div>
    </>
  );
}

export default App;
