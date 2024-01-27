import React from 'react'
import "./NavBar.css"
import Home from './../home/Home'
import About from './../about/About'
import Portfolio from './../portfolio/Portfolio'
import { Link } from 'react-scroll'
import Contact from './../contact/Contact.jsx'
const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <span className="half-color" attribute="A">A</span>
            <span className="half-color" attribute="b">b</span>
            <span className="half-color" attribute="d">d</span>
            <span className="half-color" attribute="u">u</span>
            <span className="half-color" attribute="l">l</span>
            <span className="half-color" attribute="l">l</span>
            <span className="half-color" attribute="a">a</span>
            <span className="half-color" attribute="h">h</span>
            <span className="half-color" attribute="A">A</span>
            <span className="half-color" attribute="l">l</span>
            <span className="half-color" attribute="a">a</span>
            <span className="half-color" attribute="s">s</span>
            <span className="half-color" attribute="h">h</span>
            <span className="half-color" attribute="e">e</span>
            <span className="half-color" attribute="k">k</span>
        </div>


        <div className="menu">
            <ul>
                <li><Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link></li>
                <li><Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About
                    </Link></li>
                <li><Link
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Portfolio
                    </Link></li>
                <li><Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact
                    </Link></li>
            </ul>
        </div>
    </div>
    < Home id='home' />
      < About id='about' />
      < Portfolio id='portfolio' />
      <Contact id='contact'/>

    </>
  )
}

export default NavBar