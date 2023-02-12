import React from 'react'

function ProjectCard(props) {
  return (
    <div>
        <div className="project-card animated-box in">
            <div className={props.imageClass} />
            <div className="project-content">
              <div className="project-heading">{props.heading}</div>
              <div className="project-description">{props.content}</div>
            </div>
          </div>
    </div>
  )
}

export default ProjectCard