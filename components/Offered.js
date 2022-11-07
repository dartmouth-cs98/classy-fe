import stylesCI from '../styles/CourseInfo.module.css'
import OfferedTile from './OfferedTile'

function loadOfferings(values) {
    return values.map((value) => {
        return <OfferedTile 
        key={value['term']} 
        term={value['term']} 
        instructors={value['instructors']}
        period={value['period']}
        />
    })
}


function Offered(props) {
    return (
        <div className={[stylesCI.glance]}>
            {loadOfferings(props.course.offered)}
        </div>
    );
}

export default Offered;