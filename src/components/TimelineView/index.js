// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div>
      {timelineItemsList.map(eachType => {
        if (eachType.categoryId === 'COURSE') {
          return <CourseTimelineCard courseData={eachType} key={eachType.id} />
        }
        return <ProjectTimelineCard projectData={eachType} key={eachType.id} />
      })}
    </div>
  )
}

export default TimelineView
