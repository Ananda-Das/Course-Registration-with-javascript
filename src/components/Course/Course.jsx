import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Course = ({ course, handleEnroll }) => {
  const { course_name, img_url, details, price, credit } = course;
  return (
    <div>
      {/* dauisy-card  */}
      <div className="card card-compact w-80 bg-base-100 shadow-xl p-5">
        <figure>
          <img className="w-full" src={img_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#1C1B1B] font-semibold text-xl">{course_name}</h2>
          <p className="font-normal ">{details}</p>
          <div className="flex justify-between">
            <p className="flex items-center"> <span><FaDollarSign /></span> <span>  Price : {price}</span></p>
            <p className="flex items-center"> <span><FaBookOpen /> </span>  <span className="ml-1">    Credit : {credit} hr </span></p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => handleEnroll(course)} className="btn btn-primary w-full bg-[#2F80ED] text-white rounded-xl font-semibold p-3">
              Select
            </button>
          </div>
        </div>
      </div>
      {/* dauisy-card  */}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleEnroll: PropTypes.func,
};

export default Course;
