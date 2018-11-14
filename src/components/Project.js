import React from 'react'

const Project = ({
  backgroundColor = 'rgb(108, 174, 221)',
  img,
  imgWidth,
  link = 'https://github.com/rangigo',
  projectTitle,
  tech,
  date,
  status,
  description,
  itemTitle,
  itemTitleColor,
  gradientBg = false,
}) => {
  const backgroundColorStyle = gradientBg
    ? { background: backgroundColor }
    : { backgroundColor }
  console.log(backgroundColorStyle)
  return (
    <div
      className="project"
      data-aos="zoom-in"
      style={backgroundColorStyle}
      onClick={() => window.open(link, '_blank')}
    >
      {img ? <img src={img} alt="project name" width={imgWidth} /> : null}
      {projectTitle ? (
        <div className="project-title">{projectTitle}</div>
      ) : null}
      <div className="cover">
        <div className="item-title" style={{ color: itemTitleColor }}>
          {itemTitle}
        </div>
        <div className="grid-wrapper icon-container">
          <div className="col-4 icon-box">
            <i className="fa fa-cog">
              <div className="icon-text">{tech}</div>
            </i>
          </div>
          <div className="col-4 icon-box">
            <i className="far fa-calendar">
              <div className="icon-text">{date}</div>
            </i>
          </div>
          <div className="col-4 icon-box">
            <i className="fa fa-clock">
              <div className="icon-text">{status}</div>
            </i>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default Project
