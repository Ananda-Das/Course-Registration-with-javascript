import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Enrolls from "./components/Enrolls/Enrolls";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [enrolls, setEnrolls] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);

  // const maxCredit = 20;

  const handleEnroll = (enroll) => {
    const isEnroll = enrolls.find((item) => item.id === enroll.id);

    let totalCredit = enroll.credit;

    if (isEnroll) {
      toast.error("already added");
    } else {
      enrolls.forEach((item) => {
        totalCredit = totalCredit + item.credit;
      });

      const remainingCredit = 20 - totalCredit;

      if (totalCredit > 20) {
        toast.error("Max Credit Enrolled!");
      }else {
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
      <div className="flex w-[95%] mx-auto gap-9">
        <div>
          <Courses handleEnroll={handleEnroll}></Courses>
        </div>
        <div>
          <Enrolls enrolls={enrolls} totalCredit={totalCredit} remainingCredit={remainingCredit}></Enrolls>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
