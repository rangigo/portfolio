import React, { useState, useEffect } from 'react'

export function useViewWidth() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateViewWidth = () => {
      setViewWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateViewWidth)

    return () => window.removeEventListener('resize', updateViewWidth)
  }, [])

  return viewWidth
}

const TimelineItem = ({
  jobTitle,
  timeStamp,
  description,
  timeLinePosition,
  marginTop,
}) => {
  const [toggle, setToggle] = useState('Details')

  const onClickToggle = (ev) => {
    const btnText = ev.target.value
    if (btnText === 'Details') {
      setToggle('Hide')
    } else {
      setToggle('Details')
    }
  }

  const dynamicMarginTop = useViewWidth() < 400 ? marginTop * 3 : marginTop

  return (
    <div className="col-6" data-aos={`fade-${timeLinePosition}`}>
      <div class="timeline-item">
        <div class="timeline-icon">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="21px"
            height="20px"
            viewBox="0 0 21 20"
            enable-background="new 0 0 21 20"
            xmlSpace="preserve"
          >
            <path
              fill="#FFFFFF"
              d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999
  c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499
  l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822
  c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345
  c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"
            />
          </svg>
        </div>
        <div class={`timeline-content ${timeLinePosition}`}>
          <h2>{jobTitle}</h2>
          <div class="time-stamp">
            <p>{timeStamp}</p>
          </div>
          <div class={`timeline-details`}>
            <div
              class={toggle === 'Details' ? '' : 'show'}
              dangerouslySetInnerHTML={{ __html: description }}
              style={{ marginTop: `${dynamicMarginTop}%` }}
            />
          </div>
          <button className="btn" onClick={onClickToggle} value={toggle}>
            {toggle}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
