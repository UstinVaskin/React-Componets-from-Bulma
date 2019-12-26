
import React from 'react'
import { Animated } from 'react-animated-css'
import Navbar from './navbar'
import Landing1 from './Landing1'
import Header1 from './Header1'
import Content1 from './Content1'
import Features1 from './Features1'
import HowitWorks from './HowitWorks'
import Testimonials1 from './Testimonials1'
import Portfolio1 from './Portfolio1'
import Team1 from './Team1'
import Pricing1 from './Pricing1'
import FAQ1 from './FAQ1'
import Contact1 from './Contact1'
import Footer1 from './Footer1'
import Login1 from './Login1'
import Ecommere1 from './Ecommere1'

import Cookies1 from './Cookies1'
import Calltoaction1 from './Calltoaction1'
import Gallery1 from './Gallery1'
class Home extends React.Component {
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
      <Navbar />
      <hr></hr>
      <Landing1 />
      <hr></hr>
      <Header1 />
      <hr></hr>
      <Content1 />
      <hr></hr>
      <Features1 />
      <hr></hr>
      {/* <HowitWorks />
      <hr></hr>
      <Testimonials1 />
      <hr></hr>
      <Portfolio1 />
      <hr></hr>
      <Team1 />
      <hr></hr> */}
      {/* <Pricing1 />
      <hr></hr>
      <FAQ1 />
      <hr></hr>
      <Contact1 />
      <hr></hr>
      <Footer1 />
      <hr></hr>
      <Login1 />
      <hr></hr>
      <Ecommere1 />
      <hr></hr> */}
      <hr></hr>
      <Cookies1 />
      <hr></hr>
      <Calltoaction1 />
      <hr></hr>
      <Gallery1 />
    </Animated>
  }
}
export default Home