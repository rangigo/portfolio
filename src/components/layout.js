import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
  state = {
    loading: 'is-loading',
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children, sectionOneRef } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Header sectionOneRef={sectionOneRef} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
