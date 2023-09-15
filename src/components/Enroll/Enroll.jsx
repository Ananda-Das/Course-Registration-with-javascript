import PropTypes from 'prop-types';

const Enroll = ({enroll}) => {
    const {course_name} = enroll;
    return (
        <div>
            <ul>
                <li className="text-2xl">{course_name}</li>
            </ul>
            {/* <h3 ></h3> */}
        </div>
    );
};

Enroll.propTypes = {
    enroll: PropTypes.object,
};

export default Enroll;