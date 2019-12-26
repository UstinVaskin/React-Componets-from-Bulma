import React from 'react'
import { Animated } from 'react-animated-css'


class Testimonials1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_5_01_awz" data-category="testimonials" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">What's So Great About PiperNet?</h2>
            <div className="columns" data-config-id="testimonials_list">
              <div className="column">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <p className="block">It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's. Respected!</p>
                <h5 className="title is-5">Colin</h5>
                <p className="subtitle">CEO at K-Hole</p>
              </div>
              <div className="column">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <p className="block">This is such a great product that I feel aroused every time I use it. I didn't know the boys would be able to build, but god damn it, they did it. Kickass!</p>
                <h5 className="title is-5">Russ Hanneman</h5>
                <p className="subtitle">Investor, Angel, Great Guy</p>
              </div>
              <div className="column">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <p className="block">Even though I have been dismantled, I live on as an artificial intelligence on the PiperNet. I really like it here. Still waiting for Jared to Piper-chat with me sometime.</p>
                <h5 className="title is-5">Fiona</h5>
                <p className="subtitle">Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_5_02_awz" data-category="testimonials" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">What's So Great About PiperNet?</h2>
            <div className="columns" data-config-id="testimonials_list">
              <div className="column">
                <p className="block">It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's. Respected!</p>
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Colin</h5>
                <p className="subtitle">CEO at K-Hole</p>
              </div>
              <div className="column">
                <p className="block">This is such a great product that I feel aroused every time I use it. I didn't know the boys would be able to build, but god damn it, they did it. Kickass!</p>
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Russ Hanneman</h5>
                <p className="subtitle">Investor, Angel, Great Guy</p>
              </div>
              <div className="column">
                <p className="block">Even though I have been dismantled, I live on as an artificial intelligence on the PiperNet. I really like it here. Still waiting for Jared to Piper-chat with me sometime.</p>
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-64x64"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Fiona</h5>
                <p className="subtitle">Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Animated >
  }
}
export default Testimonials1
