
import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'


class Landing1 extends React.Component {
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
      <section className="hero is-info is-fullheight">
        <div className="hero-head">

        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">
                Coming Soon
                        </h1>
              <h2 className="subtitle">
                $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                        </h2>
              <div className="box">
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Enter your email" />
                  </p>
                  <p className="control">
                    <a className="button is-info">
                      Notify Me
                                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animated>
  }
}
export default Landing1
