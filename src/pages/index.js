import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import cv from '../assets/images/cv.jpeg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  sectionOneRef = React.createRef()

  render() {
    const siteTitle = 'Panigo'

    return (
      <Layout sectionOneRef={this.sectionOneRef}>
        <Helmet title={siteTitle} />
        <section id="one" className="main style1" ref={this.sectionOneRef}>
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  <strong>&#60;About me 👨🏻‍💻 &#47;&#62;</strong>
                </h2>
              </header>
              <p>
                I am a passionate programmer who takes pleasure in tinkering
                with various computer-related fields. Before choosing web
                development as my main career path, I have had experiences in
                game programming and robot controlling. <br />I am proficient at
                building progressive web application & scalable websites. As
                someone who takes responsibility for my own personal
                development, I am continually evaluating and upgrading my skills
                to stay with the latest cutting-edge web technologies.
              </p>
            </div>
            <div className="col-6">
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
                <li>
                  <span className="icon major devicon-react-original colored" />
                </li>
                <li>
                  <span className="icon major">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <g fill="#764ABC">
                        <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                        <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                        <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
                      </g>
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="icon major devicon-nodejs-plain colored" />
                </li>
                <li>
                  <span className="icon major devicon-sass-original colored" />
                </li>
                <li>
                  <span className="icon major devicon-javascript-plain colored" />
                </li>
                <li>
                  <span className="icon major">
                    <svg
                      version="1.1"
                      id="GraphQL_Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 400 400"
                      enableBackground="new 0 0 400 400"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <rect
                              x="122"
                              y="-0.4"
                              transform="matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)"
                              fill="#E535AB"
                              width="16.6"
                              height="320.3"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="39.8"
                              y="272.2"
                              fill="#E535AB"
                              width="320.3"
                              height="16.6"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="37.9"
                              y="312.2"
                              transform="matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)"
                              fill="#E535AB"
                              width="185"
                              height="16.6"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="177.1"
                              y="71.1"
                              transform="matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)"
                              fill="#E535AB"
                              width="185"
                              height="16.6"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="122.1"
                              y="-13"
                              transform="matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)"
                              fill="#E535AB"
                              width="16.6"
                              height="185"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="109.6"
                              y="151.6"
                              transform="matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)"
                              fill="#E535AB"
                              width="320.3"
                              height="16.6"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="52.5"
                              y="107.5"
                              fill="#E535AB"
                              width="16.6"
                              height="185"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="330.9"
                              y="107.5"
                              fill="#E535AB"
                              width="16.6"
                              height="185"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="262.4"
                              y="240.1"
                              transform="matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)"
                              fill="#E535AB"
                              width="14.5"
                              height="160.9"
                            />
                          </g>
                        </g>
                        <path
                          fill="#E535AB"
                          d="M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C373.5,259.9,379.2,281.2,369.5,297.9"
                        />
                        <path
                          fill="#E535AB"
                          d="M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C94.8,99,100.5,120.3,90.9,137"
                        />
                        <path
                          fill="#E535AB"
                          d="M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C61.4,320.3,40.1,314.6,30.5,297.9"
                        />
                        <path
                          fill="#E535AB"
                          d="M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C340.1,159.4,318.7,153.7,309.1,137"
                        />
                        <path
                          fill="#E535AB"
                          d="M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,380.1,219.3,395.8,200,395.8"
                        />
                        <path
                          fill="#E535AB"
                          d="M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,58.4,219.3,74,200,74"
                        />
                      </g>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  <strong>&#60;Skills ⚙️&#47;&#62;</strong>
                </h2>
              </header>
              <p>
                I love development and design. I'm most comfortable with
                front-end technologies like React and Redux, but I have also
                done a lot of work in back-end technologies like Node.js and
                Java EE.
              </p>
              <div className="skills">
                <h4>Front-End</h4>
                <div className="minor-icons">
                  <span className="icon minor devicon-react-original colored" />
                  <span className="icon minor devicon-javascript-plain colored" />
                  <span className="icon minor devicon-sass-original colored" />
                  <span className="icon minor devicon-jquery-plain colored" />
                  <span className="icon minor devicon-bootstrap-plain colored" />
                  <span className="icon minor devicon-html5-plain colored" />
                  <span className="icon minor devicon-css3-plain colored" />
                  <span className="icon minor">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 314.1 345.5"
                    >
                      <path
                        fill="none"
                        d="M207.6 95.6l-20.7 41.8c6.8 6.3 11.6 14.6 13.5 24H216c1.8-8.9 6.2-16.9 12.5-23.1l-20.9-42.7z"
                      />
                      <path
                        fill="none"
                        d="M169.5 127.3l38.1-77 38 77.5c1.5-.5 3-.9 4.5-1.3L286.2 20H128.9l36 106.2c1.5.3 3.1.7 4.6 1.1zM156.4 195.4c13.9 0 25.2-11.3 25.2-25.2 0-5.1-1.5-9.8-4.1-13.8-.8-1.3-1.8-2.5-2.8-3.6l-.1-.1c-1-1.1-2.2-2.1-3.4-2.9l-.1-.1c-.3-.2-.7-.5-1.1-.7-.1 0-.1-.1-.2-.1-.4-.2-.8-.5-1.2-.7h-.1c-.4-.2-.9-.5-1.3-.7h-.1c-.4-.2-.8-.4-1.2-.5-.1 0-.2-.1-.3-.1-.3-.1-.7-.3-1-.4-.1 0-.2-.1-.4-.1-.4-.1-.8-.3-1.2-.4h-.1c-.5-.1-.9-.2-1.4-.3-.1 0-.2 0-.4-.1-.4-.1-.7-.1-1.1-.2-.2 0-.3 0-.5-.1-.3 0-.7-.1-1-.1h-3.9c-.4 0-.7.1-1.1.1h-.4c-.4.1-.8.1-1.2.2h-.3c-.5.1-.9.2-1.4.3-11 2.7-19.2 12.7-19.2 24.5.2 13.7 11.5 25.1 25.4 25.1zM262.4 145h-.2c-.4 0-.7-.1-1.1-.1h-1.3c-.5 0-1 0-1.6.1h-.5c-.4 0-.8.1-1.2.1-.1 0-.3 0-.4.1l-1.5.3h-.1c-.5.1-.9.2-1.4.3-.1 0-.3.1-.4.1-.4.1-.8.2-1.2.4-.1 0-.2.1-.3.1-.5.2-1 .4-1.4.6-.5.2-.9.4-1.4.6-.1 0-.2.1-.3.1-.4.2-.8.4-1.2.7 0 0-.1 0-.1.1-.9.5-1.8 1.1-2.6 1.8l-.1.1c-1.3 1-2.4 2.1-3.5 3.3-1.1 1.2-2 2.6-2.8 4-2.1 3.7-3.3 8-3.3 12.5 0 13.9 11.3 25.2 25.2 25.2 13.9 0 25.2-11.3 25.2-25.2 0-12.2-8.8-22.5-20.3-24.8-.6-.2-1.4-.3-2.2-.4zM51.9 195.4c13.9 0 25.2-11.3 25.2-25.2S65.8 145 51.9 145s-25.2 11.3-25.2 25.2 11.3 25.2 25.2 25.2z"
                      />
                      <path
                        fill="none"
                        d="M259.9 214.9c-20.8 0-38.3-14.3-43.3-33.5h-16.8c-5 19.2-22.5 33.5-43.3 33.5-2.4 0-4.7-.2-6.9-.5-5.8 8.9-12.7 17.1-20.8 24.7-14.3 13.5-30.5 23.5-48 29.8l-4.1 1.5-3.8-2c-21-10.8-31.8-32.7-28-53.9-2.4-.4-4.7-1-6.9-1.8-.4.7-.7 1.5-1.1 2.3-6.4 13.2-13.1 26.8-15.5 41.4-2.6 15.6-3.7 44.1 18.3 59.3 9.6 6.6 19.7 9.9 31 9.9 21.7 0 45.1-11.6 69.9-23.9 19.4-9.6 39.4-19.6 60.2-24.7 7.9-1.9 15.9-3.1 23.6-4.2 14.1-2 27.5-4 38.4-10.3 11.6-6.7 19.5-17.9 21.7-30.7 1.4-7.8.6-15.7-2-23-6.6 3.8-14.3 6.1-22.6 6.1z"
                      />
                      <path
                        fill="#99425b"
                        d="M304.6 170.1c0-20.8-14.3-38.3-33.5-43.3L314.1 0H101l43.1 127.2c-18.6 5.4-32.3 22.6-32.3 43 0 15 7.5 28.3 18.9 36.5-4.5 6.4-9.7 12.3-15.6 17.9C104 235 91.7 243 78.4 248.3c-12-8.1-17.2-22.4-12.5-35.2 18.3-5.6 31.6-22.7 31.6-42.8 0-24.7-20.1-44.7-44.7-44.7-24.7 0-44.8 20.1-44.8 44.8 0 12.2 5 23.4 13 31.4-.7 1.4-1.4 2.8-2.1 4.3-6.7 13.8-14.3 29.4-17.2 46.9-5.8 35 3.7 63.1 26.6 79 12.9 8.9 27.1 13.4 42.4 13.4 26.3 0 53-13.2 78.8-26 18.4-9.1 37.4-18.6 56.1-23.2 6.9-1.7 14.1-2.7 21.7-3.8 15.4-2.2 31.3-4.5 45.6-12.8 16.7-9.7 28.1-25.9 31.4-44.5 2.5-14.3 0-28.7-6.4-41.3 4.3-6.9 6.7-15 6.7-23.7zm-19.5 0c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2 0-4.5 1.2-8.8 3.3-12.5.8-1.4 1.8-2.8 2.8-4 1-1.2 2.2-2.3 3.5-3.3l.1-.1c.8-.6 1.7-1.2 2.6-1.8 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7.1 0 .2-.1.3-.1.4-.2.9-.4 1.4-.6.5-.2 1-.4 1.4-.6.1 0 .2-.1.3-.1.4-.1.8-.3 1.2-.4.1 0 .3-.1.4-.1.5-.1.9-.2 1.4-.3h.1l1.5-.3c.1 0 .3 0 .4-.1.4 0 .8-.1 1.2-.1h.5c.5 0 1-.1 1.6-.1h1.3c.4 0 .7 0 1.1.1h.2c.8.1 1.6.2 2.4.4 11.4 2.4 20.1 12.6 20.1 24.8zM128.9 20h157.3l-36.1 106.5c-1.5.3-3 .8-4.5 1.3l-38-77.5-38.1 77c-1.5-.5-3.1-.8-4.7-1.1L128.9 20zm71.5 141.4c-1.9-9.4-6.7-17.8-13.5-24l20.7-41.8 20.9 42.7c-6.2 6.2-10.7 14.1-12.5 23.1h-15.6zm-50.1-15.8c.5-.1.9-.2 1.4-.3h.3c.4-.1.8-.1 1.2-.2h.4c.4 0 .7-.1 1.1-.1h3.9c.4 0 .7.1 1 .1.2 0 .3 0 .5.1.4.1.7.1 1.1.2.1 0 .2 0 .4.1.5.1 1 .2 1.4.3h.1c.4.1.8.2 1.2.4.1 0 .2.1.4.1.3.1.7.2 1 .4.1 0 .2.1.3.1.4.2.8.3 1.2.5h.1c.5.2.9.4 1.3.7h.1c.4.2.8.5 1.2.7.1 0 .1.1.2.1.4.2.7.5 1.1.7l.1.1c1.2.9 2.3 1.9 3.4 2.9l.1.1c1 1.1 2 2.3 2.8 3.6 2.6 4 4.1 8.7 4.1 13.8 0 13.9-11.3 25.2-25.2 25.2s-25.2-11.3-25.2-25.2c-.1-11.7 8-21.6 19-24.4zm-98.4-.7c13.9 0 25.2 11.3 25.2 25.2s-11.3 25.2-25.2 25.2-25.2-11.3-25.2-25.2 11.3-25.2 25.2-25.2zm232.6 86.7c-2.2 12.8-10.1 24-21.7 30.7-10.9 6.3-24.3 8.3-38.4 10.3-7.7 1.1-15.8 2.3-23.6 4.2-20.8 5.1-40.8 15.1-60.2 24.7-24.8 12.3-48.2 23.9-69.9 23.9-11.3 0-21.4-3.2-31-9.9-22-15.2-20.9-43.7-18.3-59.3 2.4-14.6 9.1-28.3 15.5-41.4.4-.8.7-1.5 1.1-2.3 2.2.8 4.5 1.4 6.9 1.8-3.8 21.2 7 43.1 28 53.9l3.8 2 4.1-1.5c17.5-6.2 33.7-16.3 48-29.8 8.1-7.6 15-15.8 20.8-24.7 2.3.4 4.6.5 6.9.5 20.8 0 38.3-14.3 43.3-33.5h16.8c5 19.3 22.5 33.5 43.3 33.5 8.3 0 16-2.3 22.6-6.2 2.6 7.5 3.4 15.3 2 23.1z"
                      />
                    </svg>
                  </span>
                  <span className="icon minor">
                    <svg
                      width="256px"
                      height="256px"
                      viewBox="0 0 256 256"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid"
                    >
                      <g>
                        <path
                          d="M160.227,178.5186 L187.857,178.5186 L143.75,64.0486 L113.201,64.0486 L69.094,178.5186 L96.726,178.5186 L103.934,159.1286 L145.609,159.1286 L138.065,137.6726 L110.625,137.6726 L128.475,88.4186 L160.227,178.5186 Z M251.339,93.768 C250.357,90.232 246.705,88.155 243.154,89.141 C239.617,90.123 237.544,93.787 238.526,97.324 C241.299,107.309 242.704,117.63 242.704,128 C242.704,191.248 191.248,242.702 128,242.702 C64.752,242.702 13.297,191.248 13.297,128 C13.297,64.751 64.752,13.296 128,13.296 C154.793,13.296 180.718,22.814 201.179,39.752 C200.383,41.652 199.941,43.737 199.941,45.925 C199.941,54.76 207.103,61.922 215.938,61.922 C224.773,61.922 231.935,54.76 231.935,45.925 C231.935,37.09 224.773,29.928 215.938,29.928 C214.237,29.928 212.6,30.199 211.062,30.691 C188.022,11.056 158.513,0 128,0 C57.421,0 0,57.42 0,128 C0,198.579 57.421,255.999 128,255.999 C198.579,255.999 256,198.579 256,128 C256,116.428 254.433,104.91 251.339,93.768 Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4>Back-End</h4>
                <div className="minor-icons">
                  <span className="icon minor devicon-nodejs-plain colored" />
                  <span className="icon minor devicon-express-original-wordmark" />
                  <span className="icon minor devicon-java-plain colored" />
                  <span className="icon minor devicon-tomcat-line-wordmark colored" />
                  <span className="icon minor devicon-mysql-plain colored" />
                  <span className="icon minor devicon-mongodb-plain colored" />
                </div>
                <h4>Misc</h4>
                <div className="minor-icons">
                  <span className="icon minor devicon-c-plain colored" />
                  <span className="icon minor devicon-csharp-plain colored" />
                  <span className="icon minor">
                    <svg
                      viewBox="0 0 256 263"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <path
                        d="M166.872 131.237l45.91-79.275 22.184 79.275-22.185 79.256-45.909-79.256zm-22.376 12.874l45.916 79.262-79.966-20.486-57.77-58.776h91.82zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78 79.956-20.495zm65.539 65.18L227.933.06l-104.54 27.925-15.475 27.207-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232 15.497 27.207 104.528 27.92L255.94 158.22l-15.906-26.982 15.906-26.978z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  <span className="icon minor devicon-git-plain colored" />
                  <span className="icon minor devicon-webpack-plain colored" />
                  <span className="icon minor devicon-heroku-plain colored" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
