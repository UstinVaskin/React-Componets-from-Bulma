import React from 'react'
import { Animated } from 'react-animated-css'


class Pricing1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_8_01_awz" data-category="pricing" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">Our plans</h2>
            <hr />
            <div className="columns" data-config-id="pricing_01">
              <div className="column">
                <h3 className="title is-4">Small Piper</h3>
                <h4 className="title is-spaced is-5">$10 <small>Per user / monthly</small></h4>
                <p className="subtitle">Join our network, but build and manage everything yourself.</p>
                <hr />
                <ul>
                  <li>100GB storage</li>
                  <li>5 Applications</li>
                  <li>20 users max</li>
                  <li>Unlimited Data Transfer</li>
                </ul>
                <hr />
                <div className="buttons is-centered">
                  <button className="button is-primary" type="button">Contact Sales</button>
                </div>
              </div>
              <div className="column">
                <h3 className="title is-4">Medium Piper</h3>
                <h4 className="title is-spaced is-5">$50 <small>Per user / monthly</small></h4>
                <p className="subtitle">We build what you need, but you still need to manage your data.</p>
                <hr />
                <ul>
                  <li>1000GB storage</li>
                  <li>20 Applications</li>
                  <li>200 users max</li>
                  <li>Unlimited Data Transfer</li>
                </ul>
                <hr />
                <button className="button is-primary is-outlined" type="button">Contact Sales</button>
              </div>
              <div className="column">
                <h3 className="title is-4">Enterprise Piper</h3>
                <h4 className="title is-spaced is-5">$100 <small>Per user / monthly</small></h4>
                <p className="subtitle">We do everything for you, including managing your data.</p>
                <hr />
                <ul>
                  <li>Unlimited storage</li>
                  <li>Unlimited Applications</li>
                  <li>Unlimited users max</li>
                  <li>Unlimited Data Transfer</li>
                </ul>
                <hr />
                <button className="button is-primary is-outlined" type="button">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_8_02_awz" data-category="pricing" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">Our plans</h2>
            <div className="columns" data-config-id="pricing_02">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-4">Small Piper</h3>
                    <p className="block">Join our network, but build and manage everything yourself.</p>
                    <h4 className="title is-spaced is-5">$10 <small>Per user / monthly</small></h4>
                    <button className="button is-primary" type="button">Contact Sales</button>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-4">Medium Piper</h3>
                    <p className="block">We build what you need, but you still need to manage your data.</p>
                    <h4 className="title is-spaced is-5">$50 <small>Per user / monthly</small></h4>
                    <button className="button is-primary is-outlined" type="button">Contact Sales</button>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-4">Enterprise Piper</h3>
                    <p className="block">We do everything for you, including managing your data.</p>
                    <h4 className="title is-spaced is-5">$100 <small>Per user / monthly</small></h4>
                    <button className="button is-primary is-outlined" type="button">Contact Sales</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Pricing1
