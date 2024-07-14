// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props

  const {
    categoryId,
    description,
    duration,
    id,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = projectData
  return (
    <div className="projectCard">
      <img src={imageUrl} alt={id} className="projectImg" />
      <div className="headProject">
        <h1 className="headingProject">{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar />
          <p className="timeduration">{duration}</p>
        </div>
      </div>
      <div>
        <p className="paraProject">{description}</p>
        <a href={projectUrl} className="ancorEl">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
