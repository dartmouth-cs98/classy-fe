/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import stylesCI from '../styles/CourseInfo.module.css';
import OfferedTile from './OfferedTile';

function loadOfferings(values) {
  return values.map((value) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <OfferedTile
      key={value.term}
      term={value.term}
      instructors={value.instructors}
      period={value.period}
    />
  ));
}

function Offered(props) {
  const { course } = props;
  return (
    <div className={[stylesCI.glance]}>
      {loadOfferings(course.offered)}
    </div>
  );
}

export default Offered;
