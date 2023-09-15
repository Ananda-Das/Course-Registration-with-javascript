import PropTypes from 'prop-types';

const Enroll = ({enroll,index}) => {
    const {course_name} = enroll;
    return (
        <div>
            <ul>
                <li className="text-xl">{index} {course_name}</li>
            </ul>
        </div>
    );
};

Enroll.propTypes = {
    enroll: PropTypes.object,
    index: PropTypes.number,
};

export default Enroll;