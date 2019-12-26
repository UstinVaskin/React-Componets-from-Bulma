import React from 'react'
import { Animated } from 'react-animated-css'

class Features1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_3_01_awz" data-category="features" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Some of our awesome features</h2>
            <div className="columns" data-config-id="features_01">
              <div className="column is-3">
                <h4 className="title is-spaced is-4">Decentralized</h4>
                <p className="subtitle is-6">Your data is stored in many places at once. Awesome, right?</p><a href="#">Read more</a>
              </div>
              <div className="column is-3">
                <h4 className="title is-spaced is-4">Secure</h4>
                <p className="subtitle is-6">Nobody will be able to use your data without your consent.</p><a href="#">Read more</a>
              </div>
              <div className="column is-3">
                <h4 className="title is-spaced is-4">Private</h4>
                <p className="subtitle is-6">Your online activity is only yours to know. Always.</p><a href="#">Read more</a>
              </div>
              <div className="column is-3">
                <h4 className="title is-spaced is-4">Speed</h4>
                <p className="subtitle is-6">Unimaginable transfer speed thanks to middle-out compression.</p><a href="#">Read more</a>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_3_02_awz" data-category="features" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">Some of our awesome features</h2>
            <div className="block"><img className="is-16by9" src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" data-config-id="image" /></div>
            <div className="columns has-text-left" data-config-id="features_02">
              <div className="column is-4">
                <div className="columns">
                  <div className="column is-2"><img src="placeholder/icons/check.svg" alt="" /></div>
                  <div className="column is-10">
                    <h4 className="title is-spaced is-4">Security</h4>
                    <p className="subtitle is-6">Your data is virtually unhackable compared to traditional net</p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="columns">
                  <div className="column is-2"><img src="placeholder/icons/check.svg" alt="" /></div>
                  <div className="column is-10">
                    <h4 className="title is-spaced is-4">Privacy</h4>
                    <p className="subtitle is-6">Nobody is tracking you when your activity when you use Piper Net</p>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="columns">
                  <div className="column is-2"><img src="placeholder/icons/check.svg" alt="" /></div>
                  <div className="column is-10">
                    <h4 className="title is-spaced is-4">Speed</h4>
                    <p className="subtitle is-6">Previously unimaginable transfer speed thanks to middle-out compression</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons is-centered"><a className="button is-primary" href="#" data-config-id="primary-action">Read more</a></div>
          </div>
        </section>
      </div>
    </Animated >
  }
}
export default Features1
