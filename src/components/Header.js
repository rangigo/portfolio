import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  handleClick = e => {
    e.preventDefault()
    const { sectionOneRef } = this.props
    const sectionOneDomNode = ReactDOM.findDOMNode(sectionOneRef.current)
    window.scrollTo({ top: sectionOneDomNode.offsetTop, behavior: 'smooth' })
  }

  render() {
    return (
      <section id="header">
        <div className="inner">
          <div style={{ margin: 'auto' }}>
            <span className="icon major devicon-react-original colored" />
            <h1>
              Hi, I'm <strong>Phuoc Nguyen!</strong> 
            </h1>
            <h3>A Front-End to Full-Stack Developer.</h3>
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
