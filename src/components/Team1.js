import React from 'react'
import { Animated } from 'react-animated-css'


class Team1 extends React.Component {
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

        <section data-section-id="1" data-component-id="15a7_7_01_awz" data-category="team" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">The Pipers</h2>
            <p className="subtitle" data-config-id="description">We are the guys that made this whole thing possible</p>
            <div className="columns" data-config-id="team_01">
              <div className="column is-4">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Richard Hendricks</h5>
                <p className="subtitle is-6">CEO</p>
                <p>When I'm not obsessively stressing about the fate of Pied Piper, I sometimes give lectures to school kids. Spend most of my time coding.</p>
              </div>
              <div className="column is-4">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Dinesh Chugtai</h5>
                <p className="subtitle is-6">CTO</p>
                <p>I am the absolute best programmer at Pied Piper (especially better than Gilfoyle). My genius shines and guides the Pied Piper team.</p>
              </div>
              <div className="column is-4">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Bertram Gilfoyle</h5>
                <p className="subtitle is-6">Chief Systems Architect</p>
                <p>I work on Pied Piper only for the advanced technology. I don't really like most people I work with, but they need me to put out their fires, so&nbsp;I&nbsp;stay. </p>
              </div>
            </div>
          </div>
        </section>

        <section data-section-id="2" data-component-id="15a7_7_02_awz" data-category="team" className="section">
          <div className="container has-text-centered">
            <h2 className="title" data-config-id="header">The Pipers</h2>
            <p className="subtitle" data-config-id="description">We are the guys that made this whole thing possible</p>
            <div className="columns is-centered is-multiline" data-config-id="team_02">
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Richard Hendricks</h5>
                <p className="subtitle is-6">CEO</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Jared Dunn</h5>
                <p className="subtitle is-6">COO</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Monica Hall</h5>
                <p className="subtitle is-6">CFO</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Erlich Bachman</h5>
                <p className="subtitle is-6">Marketing Manager</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Bertram Gilfoyle</h5>
                <p className="subtitle is-6">Chief Systems Architect</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Dinesh Chugtai</h5>
                <p className="subtitle is-6">Senior Programmer</p>
              </div>
              <div className="column is-3">
                <div className="level">
                  <div className="level-item">
                    <figure className="image is-128x128"><img className="is-rounded" src="placeholder/pictures/bg_circle.svg?primary=00d1b2" alt="" /></figure>
                  </div>
                </div>
                <h5 className="title is-5">Nelson Bighetti</h5>
                <p className="subtitle is-6">Majority Investor</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Animated >
  }
}
export default Team1
