import React from 'react'
import { Animated } from 'react-animated-css'


class Contatct1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_10_01_awz" data-category="contacts" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Contact the Pied Piper team</h2>
            <div className="columns">
              <div className="column is-6">
                <h4 className="title is-spaced is-4" data-config-id="subheader">Let's talk about the future of the internet</h4>
                <p className="subtitle" data-config-id="description">We're here to answer your questions and discuss the decentralized future of the internet.</p>
                <div data-config-id="list">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-24x24"><img src="placeholder/icons/map-marker.svg" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>Pied Piper HQ - 59 Silicon Av.</p>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-24x24"><img src="placeholder/icons/phone.svg" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>555-333-555</p>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-24x24"><img src="placeholder/icons/envelope.svg" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>pay-the-piper@piedpiper.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="select is-fullwidth">
                      <select>
                        <option disabled="" selected="">Select product</option>
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" rows="5" placeholder="Write something..."></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth" type="submit" data-config-id="primary-action">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_10_02_awz" data-category="contacts" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Contact the Pied Piper team</h2>
            <div className="columns">
              <div className="column is-6"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" data-config-id="image" /></div>
              <div className="column is-6">
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="select is-fullwidth">
                      <select>
                        <option disabled="" selected="">Select product</option>
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" rows="5" placeholder="Write something..."></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth" type="submit" data-config-id="primary-action">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Contatct1
