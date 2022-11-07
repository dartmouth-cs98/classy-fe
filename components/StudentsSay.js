import stylesCI from '../styles/CourseInfo.module.css'
import CourseInfoTile from './Tile';

function StudentsSay(props) {
    return (
        <div className={[stylesCI.glance]}>
            <CourseInfoTile title={"Workload"} val={props.workload}/>
            <CourseInfoTile title={"Difficulty"} val={props.difficulty}/>
            <CourseInfoTile title={"Quality"} val={props.quality}/>
        </div>
    );
}

export default StudentsSay;