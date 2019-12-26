import React from 'react'
import { Animated } from 'react-animated-css'


class Calltoaction extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_18_01_awz" data-category="call-to-action" className="section">
          <div className="container has-text-centered">
            <h2 className="title is-spaced" data-config-id="header">Future of the Internet</h2>
            <p className="subtitle" data-config-id="description">Decentralized, secure, private. The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.</p><a className="button is-primary" href="#" data-config-id="primary-action">Join the Revolution!</a>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_18_03_awz" data-category="call-to-action" className="section">
          <div className="container has-text-centered">
            <h2 className="title is-spaced" data-config-id="header">Future of the Internet</h2>
            <p className="subtitle" data-config-id="description">Decentralized, secure, private. The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.</p>
            <div className="buttons is-centered"><a className="button is-primary" href="#" data-config-id="primary-action">Join the Revolution!</a></div>
            <h3 className="title is-5" data-config-id="list-title">Great Companies that already use PiperNet</h3>
            <div className="columns" data-config-id="list_03">
              <div className="column"><img src="placeholder/logos/gitscape.svg?primary=00d1b2" alt="" /></div>
              <div className="column"><img src="placeholder/logos/k-hole.svg?primary=00d1b2" alt="" /></div>
              <div className="column"><img src="placeholder/logos/tholio.svg?primary=00d1b2" alt="" /></div>
              <div className="column"><img src="placeholder/logos/plucky.svg?primary=00d1b2" alt="" /></div>
              <div className="column"><img src="placeholder/logos/1stsight.svg?primary=00d1b2" alt="" /></div>
            </div>
          </div>
        </section>
      </div>
    </Animated >
  }
}
export default Calltoaction
