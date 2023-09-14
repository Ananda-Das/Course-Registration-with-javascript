import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { course_name,img_url,details,price, credit } = course;
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
            <p>Price : {price}</p>
            <p>Credit : {credit} hr</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full bg-[#2F80ED] text-white rounded-xl font-semibold p-3">Select</button>
          </div>
        </div>
      </div>
      {/* dauisy-card  */}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
