import PropTypes from "prop-types";
import Enroll from "../Enroll/Enroll";

const Enrolls = ({ enrolls, totalCredit, remainingCredit }) => {
  return (
    <div>
      <h3 className="text-[#2F80ED] font-bold text-xl">Credit Hour Remaining {totalCredit === 0 ? 20 : remainingCredit} hr</h3> <hr />
      <h1 className="text-[#1C1B1B] font-bold text-xl">Course Name</h1>
      <ul>
        {enrolls.map((enroll, index) => (
          <Enroll key={enroll.id} index={index + 1} enroll={enroll}></Enroll>
        ))}
      </ul>
      <hr />
      <p>Total Credit Hour : {totalCredit}</p>
    </div>
  );
};

Enrolls.propTypes = {
  enrolls: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
};

export default Enrolls;
