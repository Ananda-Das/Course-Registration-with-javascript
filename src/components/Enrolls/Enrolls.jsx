import PropTypes from "prop-types";
import Enroll from "../Enroll/Enroll";

const Enrolls = ({ enrolls,totalCredit }) => {
  return (
    <div>
      <h3 className="text-[#2F80ED] font-bold text-xl">Credit Hour Remaining 20 hr</h3>
      <h1 className="text-[#1C1B1B] font-bold text-xl">Course Name</h1>
      <ul>
          {enrolls.map((enroll) => (
            <Enroll key={enroll.id} enroll={enroll}></Enroll>
          ))}
      </ul>
      <p>Total Credit Hour : {totalCredit}</p>
    </div>
  );
};

Enrolls.propTypes = {
  enrolls: PropTypes.array,
  totalCredit: PropTypes.number,
};

export default Enrolls;
