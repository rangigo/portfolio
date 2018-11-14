import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/panigo37"
              target="_blank"
              className="icon alt fab fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/panigo/"
              target="_blank"
              className="icon alt fab fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_p3.7/"
              target="_blank"
              className="icon alt fab fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rangigo"
              target="_blank"
              className="icon alt fab fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:panigo3797@gmail.com"
              target="_blank"
              className="icon alt fa fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Panigo</li>
          <li>Powered by Gatsby with ❤</li>
        </ul>
      </section>
    )
  }
}

export default Footer
