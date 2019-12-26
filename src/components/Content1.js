import React from 'react'
import { Animated } from 'react-animated-css'


class Content1 extends React.Component {
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

      <section data-section-id="1" data-component-id="15a7_19_01_awz" data-category="content" className="section">
        <div className="container has-text-centered">
          <div className="block"><img src="placeholder/icons/unicorn.svg" alt="" data-config-id="icon" />
            <p data-config-id="description">Our mission is not to outsell Hooli with a product like their latest Box 3. We are not in it for the money - we are in it to make the whole world decentralized. To give you control over your data. To change by the internet as we know it by integrating a very important feature into it - freedom.</p>
          </div>
        </div>
      </section>

      <section data-section-id="2" data-component-id="15a7_19_02_awz" data-category="content" className="section">
        <div className="container has-text-centered">
          <h2 className="title" data-config-id="header">Decentralized, secure, private.</h2>
          <div className="block" data-config-id="icons"><img src="placeholder/icons/unicorn.svg" alt="" /><img src="placeholder/icons/unicorn.svg" alt="" /><img src="placeholder/icons/unicorn.svg" alt="" />
            <p data-config-id="description">Our mission is not to outsell Hooli with a product like their latest Box 3. We are not in it for the money - we are in it to make the whole world decentralized. To give you control over your data. To change by the internet as we know it by integrating a very important feature into it - freedom.</p>
          </div>
        </div>
      </section>

    </Animated >
  }
}
export default Content1
