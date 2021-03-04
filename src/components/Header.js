import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  headerRef = React.createRef()

  handleClick = (e) => {
    e.preventDefault()
    const { sectionOneRef } = this.props
    const sectionOneDomNode = ReactDOM.findDOMNode(sectionOneRef.current)
    window.scrollTo({
      top: sectionOneDomNode.offsetTop,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <section id="header" ref={this.headerRef}>
        <div className="inner">
          <div
            style={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignContent: 'space-around',
            }}
          >
            <span className="icon minor devicon-angularjs-plain colored" />
            <span className="icon major devicon-react-original colored" />
            <h1>
              Hi, I'm <strong>Paavo</strong>
            </h1>
            <h3>
              <a
                href="https://www.youtube.com/watch?v=jZW7wnhsgbw"
                target="_blank"
                rel="noreferrer"
              >
                気になります
              </a>{' '}
              | practicing{' '}
              <a
                href="https://www.mindful.org/meditation/mindfulness-getting-started/"
                target="_blank"
                rel="noreferrer"
              >
                mindfulness
              </a>
            </h3>
            <h3>
              <a href="https://jamstack.org" target="_blank" rel="noreferrer">
                Jamstack
              </a>{' '}
              Evangelist✨
            </h3>
          </div>
          <ul className="actions">
            <li>
              <a
                href="#one"
                className="button scrolly"
                onClick={this.handleClick}
              >
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
