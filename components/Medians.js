/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import stylesCI from '../styles/CourseInfo.module.css';
import MedianTile from './MedianTile';

export function convertMedian(avgMedian) {
  const roundedAvg = Math.round(avgMedian * 2) / 2.0;
  const grades = ['A', 'A/A-', 'A-', 'A-/B+', 'B+', 'B+/B', 'B', 'B/B-', 'B-'];
  const diff = 12 - roundedAvg + 0.25;
  return grades[Math.floor(diff * 2)];
}

function loadMedians(values) {
  return Object.entries(values).map((key) => (
    <MedianTile
      key={key[0]}
      term={key[0]}
      median={convertMedian(key[1])}
    />
  ));
}

function Medians(props) {
  // eslint-disable-next-line react/prop-types
  const { medians } = props;
  return (
    <div className={[stylesCI.glance]}>
      {loadMedians(medians)}
    </div>
  );
}

export default Medians;
