import React from 'react'
import { Animated } from 'react-animated-css'


class Cookies1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_22_01_awz" data-category="cookies">
          <div className="notification">
            <button className="delete"></button>
            <h3 className="title" data-config-id="header">Cookie Policy</h3>
            <p className="subtitle" data-config-id="description">We use cookies to personalise content, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners. If you want to change your cookie setting, please see the ‘how to reject cookies' section of our <a href="#">Cookie Policy</a>. Otherwise, if you agree to our use of cookies, please continue to use our website.</p>
            <button className="button is-primary" data-config-id="primary-action">I accept cookies</button>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_22_02_awz" data-category="cookies">
          <div className="notification">
            <button className="delete"></button>
            <p className="block" data-config-id="description">We use cookies to personalise content, to&nbsp;provide social media features and to&nbsp;analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners. If you want to change your cookie setting, please see the ‘how to reject cookies' section of our <a href="#">Cookie Policy</a>. Otherwise, if you agree to our use of cookies, please continue to use our website.</p>
            <button className="button is-primary" data-config-id="primary-action">I accept cookies</button>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Cookies1
