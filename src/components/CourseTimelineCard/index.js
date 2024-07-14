// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList, title} = courseData
  return (
    <div className="projectCard">
      <div className="headProject">
        <h1 className="headingProject">{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle />
          <p className="timeduration">{duration}</p>
        </div>
      </div>
      <div>
        <p className="paraProject">{description}</p>
        <ul className="unorderedList">
          {tagsList.map(eachItem => (
            <li key={eachItem.id} className="listItem">
              {eachItem.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseTimelineCard
