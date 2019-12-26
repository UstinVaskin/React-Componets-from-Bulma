import React from 'react'
import { Animated } from 'react-animated-css'


class Portfolio1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_6_01_awz" data-category="portfolio" className="section">
          <div className="container">
            <h2 className="title" data-config-id="header">Great Companies that already use PiperNet</h2>
            <div className="columns">
              <div className="column is-9"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" data-config-id="image" /></a></div>
              <div className="column is-3">
                <div className="columns is-mobile is-multiline" data-config-id="thumbnails">
                  <div className="column is-4-mobile is-12-tablet"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
                  <div className="column is-4-mobile is-12-tablet"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
                  <div className="column is-4-mobile is-12-tablet"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <h4 className="title is-spaced is-4" data-config-id="subheader">Client: K-Hole</h4>
                <p className="subtitle" data-config-id="description">We are constantly looking for new partners to migrate onto the Piper Net. The future of the internet is here - venture towards it with Pied Piper!</p>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_6_02_awz" data-category="portfolio" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">Great Companies that already use PiperNet</h2>
            <div className="block"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
            <div className="columns is-mobile" data-config-id="thumbnails">
              <div className="column is-3"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-3"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-3"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-3"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
            </div>
            <h4 className="title is-spaced is-4" data-config-id="subheader">Client: K-Hole</h4>
            <p className="subtitle" data-config-id="description">We are constantly looking for new partners to migrate onto the Piper Net. The future of the internet is here - venture towards it with Pied Piper!</p>
          </div>
        </section>
      </div>
    </Animated >
  }
}
export default Portfolio1
