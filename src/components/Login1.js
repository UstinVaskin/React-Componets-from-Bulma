import React from 'react'
import { Animated } from 'react-animated-css'


class Login1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_12_01_awz" data-category="sign-in" className="section">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-5 is-4-desktop">
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-primary is-fullwidth" data-config-id="primary-action">Sign in!</button>
                  </div><a href="#" data-config-id="secondary-action">or sign in with Facebook</a>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_12_02_awz" data-category="sign-in" className="section">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-5 is-4-desktop">
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <button className="button is-primary is-outlined is-fullwidth" data-config-id="secondary-action">Sign In!</button>
                    </div>
                    <div className="control is-expanded">
                      <button className="button is-primary is-fullwidth" data-config-id="primary-action">Sign up!</button>
                    </div>
                  </div>
                  <p data-config-id="terms">By signing in you agree with the <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Login1
