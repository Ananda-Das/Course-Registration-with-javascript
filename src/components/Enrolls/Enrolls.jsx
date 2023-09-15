import PropTypes from "prop-types";
import Enroll from "../Enroll/Enroll";

const Enrolls = ({ enrolls, totalCredit, remainingCredit }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl p-5">
      <h3 className="text-[#2F80ED] font-bold text-xl py-2">Credit Hour Remaining {totalCredit === 0 ? 20 : remainingCredit} hr</h3> <hr />
      <h1 className="text-[#1C1B1B] font-bold text-xl py-2">Course Name</h1>
      <ul className="py-2">
        {enrolls.map((enroll, index) => (
          <Enroll key={enroll.id} index={index + 1} enroll={enroll}></Enroll>
        ))}
      </ul>
      <hr />
      <p className="py-2">Total Credit Hour : {totalCredit}</p>
    </div>
  );
};

Enrolls.propTypes = {
  enrolls: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
};

export default Enrolls;
