import React from 'react'
import { Animated } from 'react-animated-css'


class FAQ1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_9_01_awz" data-category="faqs" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Frequently Asked Questions</h2>
            <div className="list is-hoverable" data-config-id="faq"><a className="list-item" href="#">
              <div className="media">
                <div className="media-content">How is a decentralized network different from the traditional web?</div>
                <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
              </div></a><a className="list-item" href="#">
                <div className="media">
                  <div className="media-content">Why shouldn't I just store my data on a Hooli Box?</div>
                  <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
                </div></a><a className="list-item" href="#">
                <div className="media">
                  <div className="media-content">What makes PiperNet so safe?</div>
                  <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
                </div></a><a className="list-item" href="#">
                <div className="media">
                  <div className="media-content">How long does it take to get a company up and running on PiperNet?</div>
                  <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
                </div></a><a className="list-item" href="#">
                <div className="media">
                  <div className="media-content">How is a decentralized network different from the traditional web?</div>
                  <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
                </div></a><a className="list-item" href="#">
                <div className="media">
                  <div className="media-content">Why shouldn't I just store my data on a Hooli Box?</div>
                  <div className="media-right"><img src="placeholder/icons/chevron-circle-down.svg" alt="" /></div>
                </div></a></div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_9_03_awz" data-category="faqs" className="section">
          <div className="container">
            <h2 className="title has-text-centered" data-config-id="header">Frequently Asked Questions</h2>
            <div className="block" data-config-id="faq">
              <div className="card block">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <h3 className="title is-4">How is a decentralized network different from the traditional web?</h3>
                      <p>Decentralization is a key aspect of PiperNet. Traditionally, to access data on a website, you needed to connect to a single server containing that data. This method of storing data makes it easy for third parties to get access to it, corrupt it or even delete it. In PiperNet it is securely stored on multiple devices in the network, which makes it harder to hack and interfere with your data.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card block">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <h3 className="title is-4">Why shouldn't I just store my data on a Hooli Box?</h3>
                      <p>That's just the thing - if you store your data in a single place, like Gavin Belsons' poorly-made server box, your data will very susceptible to hacking. Whereas on PiperNet, your data is safe with many copies to back it up from.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card block">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <h3 className="title is-4">What makes PiperNet so safe?</h3>
                      <p>Our proprietary middle-out compression algorithm allows data to flow so fast that it can't be hacked! But, in all seriousness, the algorithm helps but it's the public, immutable ledger that makes it secure. This enables PiperNet users to exchange data without risk of it being intercepted by third parties.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card block">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                    </div>
                    <div className="media-content">
                      <h3 className="title is-4">How long does it take to get a company up and running on PiperNet?</h3>
                      <p>Access to the public network is granted within a day, but moving all your data and integrating your existing software depends on how big your company is. Startups can expect to be fully online within a week, enterprises can take up to a month due to large reliance on legacy systems and huge datasets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons is-centered"><a className="button is-primary" href="#" data-config-id="primary-action">See all</a></div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default FAQ1
