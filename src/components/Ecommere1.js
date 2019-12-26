import React from 'react'
import { Animated } from 'react-animated-css'


class Ecommere extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_14_01_awz" data-category="ecommerce" className="section">
          <div className="container">
            <div className="columns is-desktop is-vcentered">
              <div className="column is-6-desktop"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" data-config-id="image" /></div>
              <div className="column is-6-desktop">
                <div className="level is-mobile">
                  <div className="level-left" data-config-id="header-icons"><a className="level-item" href="#"><img src="placeholder/icons/unicorn.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/unicorn.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/unicorn.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/unicorn.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/unicorn.svg" alt="" /></a></div>
                </div>
                <h2 className="title is-spaced" data-config-id="header">Official Pied Piper T-Shirt</h2>
                <p className="subtitle" data-config-id="paragraph">This wonderful green shirt will make you an evangelist of Pied Pipers' world-changing technology. It will make you stand out anywhere you go - so say yes to decentralization, and say yes to our official Pied Piper swag.</p>
                <div className="level is-mobile">
                  <div className="level-left"><a className="level-item" href="#">
                    <div className="tag is-primary">&nbsp;</div></a><a className="level-item" href="#">
                      <div className="tag is-danger">&nbsp;</div></a><a className="level-item" href="#">
                      <div className="tag is-dark">&nbsp;</div></a><a className="level-item" href="#">
                      <div className="tag is-info">&nbsp;</div></a></div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label" data-config-id="price">$399</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input" type="number" placeholder="1" />
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <button className="button is-primary" data-config-id="primary-action">Buy Now!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item"><a href="#" data-config-id="secondary-action">Add to favorites</a></div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">Share</div><a className="level-item" href="#"><img src="placeholder/icons/facebook-f.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/twitter.svg" alt="" /></a><a className="level-item" href="#"><img src="placeholder/icons/instagram.svg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="3" data-component-id="15a7_14_02_awz" data-category="ecommerce" className="section">
          <div className="container">
            <div className="columns is-desktop is-vcentered">
              <div className="column is-6-desktop">
                <h2 className="title" data-config-id="header">Official Pied Piper T-Shirt</h2>
                <p className="subtitle" data-config-id="subheader">$39,99 (Ex. Tax)</p>
                <div className="tabs">
                  <ul data-config-id="tabs">
                    <li className="is-active"><a href="#">Active Tab</a></li>
                    <li><a href="#">Inactive One</a></li>
                    <li><a href="#">Inactive Two</a></li>
                  </ul>
                </div>
                <p className="subtitle" data-config-id="description">This wonderful green shirt will make you an evangelist of Pied Pipers' world-changing technology. It will make you stand out anywhere you go - so say yes to decentralization, and say yes to our official Pied Piper swag.</p>
                <table className="table is-fullwidth">
                  <tbody data-config-id="table">
                    <tr>
                      <td>Item one</td>
                      <td className="has-text-right">First value</td>
                    </tr>
                    <tr>
                      <td>Item two</td>
                      <td className="has-text-right">Secound value</td>
                    </tr>
                    <tr>
                      <td>Item three</td>
                      <td className="has-text-right">Third value</td>
                    </tr>
                  </tbody>
                </table>
                <button className="button is-primary" data-config-id="primary-action">Buy Now!</button>
              </div>
              <div className="column is-6-desktop"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" data-config-id="image" />
                <div className="level is-mobile" data-config-id="images">
                  <div className="level-item"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></div>
                  <div className="level-item"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></div>
                  <div className="level-item"><img src="placeholder/pictures/bg_4-3.svg?primary=00d1b2" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Ecommere
