import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'


class Header1 extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        city: '',
        country: ''
      },
      error: ''
    }
  }
  handleChange(e) {
    console.log(e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }
  render() {
    // console.log(location)
    return <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="container is-fluid" id="content">

        <section data-section-id="1" data-component-id="15a7_2_01_awz" data-category="headers" className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-spaced" data-config-id="header">The New Internet</h1>
              <h2 className="subtitle" data-config-id="description">Decentralized, secure, private. The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.</h2>
              <div className="buttons is-centered"><a className="control button is-primary" href="#" data-config-id="primary-action">Sign up for free</a><a className="control button is-light" href="#" data-config-id="secondary-action">Read more</a></div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_2_02_awz" data-category="headers" className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="subtitle" data-config-id="label">The New Internet</h2>
              <h1 className="title" data-config-id="header">We've built a decentralized internet where information is totally free</h1><a href="#" data-config-id="primary-action">Read more »</a>
            </div>
          </div>
        </section>
      </div>
    </Animated >
  }
}
export default Header1
