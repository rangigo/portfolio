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
            <span className="icon major fab fa-react" />
            <h1>
              Hi, I'm <strong>Phuoc Nguyen!</strong> 
            </h1>
            <h3>A Front-end to Full-stack Developer.</h3>
          </div>
          {/* <p>
            I am a passionate programmer who takes pleasure in tinkering with
            various computer-related fields. <br />Before choosing web development as
            my main career path, I have had experiences in game programming and
            robot controlling.
          </p> */}
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
