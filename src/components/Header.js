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
            <span className="icon major devicon-react-original colored" />
            <h1>
              Hi, I'm <strong>Phuoc Nguyen!</strong>
            </h1>
            <h3>
              I'm a 123456789x rockstar software engineer
            </h3>
            <h3>Eternal Learner</h3>
            <h3> (React * TypeScript) ^ AWS ~ Serverless</h3>
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
