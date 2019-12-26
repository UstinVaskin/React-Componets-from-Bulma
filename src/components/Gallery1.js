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

        <section data-section-id="1" data-component-id="15a7_17_01_awz" data-category="gallery" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Gallery</h2>
            <div className="columns" data-config-id="gallery_01">
              <div className="column"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_17_02_awz" data-category="gallery" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Gallery</h2>
            <div className="columns is-multiline" data-config-id="gallery_02">
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
              <div className="column is-4"><a href="#"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></a></div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Cookies1
