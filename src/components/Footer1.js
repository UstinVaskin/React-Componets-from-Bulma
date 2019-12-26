import React from 'react'
import { Animated } from 'react-animated-css'


class Footer1 extends React.Component {
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

        <footer data-section-id="1" data-component-id="15a7_11_01_awz" data-category="footers" className="footer">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <div className="level-item"><a className="title is-4" href="#" data-config-id="brand">Pied Piper</a></div>
              </div>
              <div className="level-right" data-config-id="nav"><a className="level-item" href="#">Features</a><a className="level-item" href="#">Enterprise</a><a className="level-item" href="#">Support</a><a className="level-item" href="#">ICO</a></div>
            </div>
            <hr />
            <div className="columns">
              <div className="column">
                <div className="buttons" data-config-id="icons"><a className="button" href="#"><img src="placeholder/icons/twitter.svg" alt="" /></a><a className="button" href="#"><img src="placeholder/icons/facebook-f.svg" alt="" /></a><a className="button" href="#"><img src="placeholder/icons/instagram.svg" alt="" /></a></div>
              </div>
              <div className="column has-text-centered has-text-right-tablet">
                <p className="subtitle is-6" data-config-id="copyright">© 2019 Pied Piper. All right reserved.</p>
              </div>
            </div>
          </div>
        </footer>

        <footer data-section-id="2" data-component-id="15a7_11_02_awz" data-category="footers" className="footer">
          <div className="container">
            <div className="columns">
              <div className="column is-4 has-text-centered is-hidden-tablet"><a className="title is-4" href="#" data-config-id="brand">Pied Piper</a></div>
              <div className="column is-4">
                <div className="level" data-config-id="nav1"><a className="level-item" href="#">Features</a><a className="level-item" href="#">Enterprise</a></div>
              </div>
              <div className="column is-4 has-text-centered is-hidden-mobile"><a className="title is-4" href="#" data-config-id="brand">Pied Piper</a></div>
              <div className="column is-4 has-text-right">
                <div className="level" data-config-id="nav2"><a className="level-item" href="#">Support</a><a className="level-item" href="#">ICO</a></div>
              </div>
            </div>
            <p className="subtitle has-text-centered is-6" data-config-id="copyright">© 2019 Pied Piper. All right reserved.</p>
          </div>
        </footer>
      </div>

    </Animated >
  }
}
export default Footer1
