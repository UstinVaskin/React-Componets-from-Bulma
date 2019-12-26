import React from 'react'
import { Animated } from 'react-animated-css'


class HowitWorks extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_4_02_awz" data-category="how-it-works" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">PiperNet Setup</h2>
            <div className="columns is-multiline is-centered" data-config-id="how_02">
              <div className="column is-8 is-4-widescreen">
                <div className="block"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" /></div>
                <h4 className="title"><small className="number">1</small> Move Data</h4>
                <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
              </div>
              <div className="column is-8 is-4-widescreen">
                <div className="block"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" /></div>
                <h4 className="title"><small className="number">2</small> Integrate Software</h4>
                <p>We want to make sure that you can keep using the software that you use to manage your  business.</p>
              </div>
              <div className="column is-8 is-4-widescreen">
                <div className="block"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" /></div>
                <h4 className="title"><small className="number">3</small> Ongoing Support</h4>
                <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for&nbsp;you.</p>
              </div>
            </div>
            <div className="buttons is-centered"><a className="button is-primary" href="" data-config-id="primary-action">Learn more</a></div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_4_03_awz" data-category="how-it-works" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">PiperNet Setup</h2>
            <div className="columns is-vcentered">
              <div className="column">
                <h2 className="title is-spaced" data-config-id="subheader">How to start</h2>
                <p className="subtitle" data-config-id="description">Let's get you connected! We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p><a className="button is-primary" href="#" data-config-id="primary-action">Start Setup!</a>
              </div>
              <div className="column"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" data-config-id="image" /></div>
            </div>
            <hr />
            <div className="level" data-config-id="steps">
              <div className="level-item">
                <div className="number has-background-primary">1</div>
                <h4 className="title is-4">Move</h4>
              </div>
              <div className="level-item">
                <div className="number">2</div>
                <h4 className="title is-4">Integrate</h4>
              </div>
              <div className="level-item">
                <div className="number">3</div>
                <h4 className="title is-4">Support</h4>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default HowitWorks
