import React from 'react'
import Helmet from 'react-helmet'
import AOS from 'aos'
import ReactTooltip from 'react-tooltip'
import 'aos/dist/aos.css'

import Layout from '../components/layout'

import cv from '../assets/images/cv.jpeg'
import Project from '../components/Project'
import projects from '../data/data'
import ReduxLogo from '../components/svg/ReduxLogo'
import GraphQLLogo from '../components/svg/GraphQLLogo'
import JestLogo from '../components/svg/JestLogo'
import ApolloLogo from '../components/svg/ApolloLogo'
import UnityLogo from '../components/svg/UnityLogo'

class Homepage extends React.Component {
  sectionOneRef = React.createRef()

  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }

  render() {
    const siteTitle = 'Panigo'

    return (
      <Layout sectionOneRef={this.sectionOneRef}>
        <Helmet title={siteTitle}>
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />
        </Helmet>
        <ReactTooltip place="bottom" type="light" effect="float" />
        <section id="one" className="main style1" ref={this.sectionOneRef}>
          <div className="grid-wrapper">
            <div className="col-6" data-aos="fade-right">
              <header className="major">
                <h2>
                  <strong>
                    &#60;About me{' '}
                    <span role="img" aria-label="about">
                      👨🏻‍💻
                    </span>{' '}
                    &#47;&#62;
                  </strong>
                </h2>
              </header>
              <p>
                I am a passionate programmer who takes pleasure in tinkering
                with various computer-related fields. Before choosing web
                development as my main career path, I have had experiences in
                game programming and robot controlling.
              </p>
              <p>
                I am also proficient at building progressive web application &
                scalable websites. As someone who takes responsibility for my
                own personal development, I am continually evaluating and
                upgrading my skills to stay with the latest cutting-edge web
                technologies.
              </p>
            </div>
            <div className="col-6" data-aos="fade-left">
              <span className="image fit">
                <img src={cv} alt="avatar" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li data-aos="zoom-out">
                  <span className="icon major devicon-react-original colored" />
                </li>
                <li data-aos="zoom-out">
                  <span className="icon major">
                    <ReduxLogo />
                  </span>
                </li>
                <li data-aos="zoom-out">
                  <span className="icon major devicon-nodejs-plain colored" />
                </li>
                <li>
                  <span className="icon major devicon-sass-original colored" />
                </li>
                <li data-aos="zoom-out">
                  <span className="icon major devicon-javascript-plain colored" />
                </li>
                <li data-aos="zoom-out">
                  <span className="icon major">
                    <GraphQLLogo />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major" data-aos="zoom-out">
                <h2>
                  <strong>
                    &#60;Skills{' '}
                    <span role="img" aria-label="skills">
                      ⚙️
                    </span>
                    &#47;&#62;
                  </strong>
                </h2>
              </header>
              <p data-aos="zoom-out">
                I love development and design. I'm most comfortable with
                front-end technologies like React and Redux, but I have also
                done a lot of work in back-end technologies like Node.js and
                Java EE.
              </p>
              <div className="skills" data-aos="zoom-out">
                <h4>Front-End</h4>
                <div className="minor-icons">
                  <span
                    className="icon minor devicon-react-original colored"
                    data-tip="React"
                  />
                  <span
                    className="icon minor devicon-javascript-plain colored"
                    data-tip="JavaScript"
                  />
                  <span
                    className="icon minor devicon-sass-original colored"
                    data-tip="SASS"
                  />
                  <span
                    className="icon minor devicon-jquery-plain-wordmark colored"
                    data-tip="JQuery"
                  />
                  <span
                    className="icon minor devicon-bootstrap-plain colored"
                    data-tip="Bootstrap"
                  />
                  <span
                    className="icon minor devicon-html5-plain colored"
                    data-tip="HTML5"
                  />
                  <span
                    className="icon minor devicon-css3-plain colored"
                    data-tip="CSS3"
                  />
                  <span className="icon minor" data-tip="Jest">
                    <JestLogo />
                  </span>
                  <span className="icon minor" data-tip="Apollo/GraphQL">
                    <ApolloLogo />
                  </span>
                </div>
                <h4>Back-End</h4>
                <div className="minor-icons">
                  <span
                    className="icon minor devicon-nodejs-plain colored"
                    data-tip="NodeJS"
                  />
                  <span
                    className="icon minor devicon-express-original-wordmark"
                    data-tip="Express"
                  />
                  <span
                    className="icon minor devicon-java-plain colored"
                    data-tip="Java"
                  />
                  <span
                    className="icon minor devicon-tomcat-line-wordmark colored"
                    data-tip="Tomcat"
                  />
                  <span
                    className="icon minor devicon-mysql-plain colored"
                    data-tip="MySQL"
                  />
                  <span
                    className="icon minor devicon-mongodb-plain colored"
                    data-tip="MongoDB"
                  />
                </div>
                <h4>Misc</h4>
                <div className="minor-icons">
                  <span
                    className="icon minor devicon-c-plain colored"
                    data-tip="C"
                  />
                  <span
                    className="icon minor devicon-csharp-plain colored"
                    data-tip="C#"
                  />
                  <span className="icon minor" data-tip="Unity">
                    <UnityLogo />
                  </span>
                  <span
                    className="icon minor devicon-git-plain colored"
                    data-tip="Git"
                  />
                  <span
                    className="icon minor devicon-webpack-plain colored"
                    data-tip="Webpack"
                  />
                  <span
                    className="icon minor devicon-heroku-plain colored"
                    data-tip="Heroku"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div style={{ flex: 0.8 }}>
            <div className="projects-header">
              <header className="major">
                <h2>
                  <strong>
                    &#60;Projects{' '}
                    <span role="img" aria-label="about">
                      📋
                    </span>{' '}
                    &#47;&#62;
                  </strong>
                </h2>
              </header>
              <p>
                Most of my work is in web development, but I am also really
                proud of my game & robot projects.
              </p>
            </div>
            <div className="projects">
              {projects.map(el => (
                <Project {...el} key={el.link} />
              ))}
            </div>
          </div>
        </section>

        {/* <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Contact</h2>
            </header>
            <p>Thanks for visiting my website! If you have an offer or just want to chat, send me an email!</p>
          </div>
        </section> */}
      </Layout>
    )
  }
}

export default Homepage
