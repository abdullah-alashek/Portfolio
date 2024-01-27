import React from 'react'
import './Portfolio.css'

import strapi from './../../assets/images/strapi.png'
import pro1 from './../../assets/images/pro1.png'
import pro2 from './../../assets/images/pro2.png'
import pro3 from './../../assets/images/pro3.png'
import pro4 from './../../assets/images/pro4.png'
import pro5 from './../../assets/images/pro5.png'
import pro6 from './../../assets/images/pro6.png'
import pro7 from './../../assets/images/pro7.png'
import pro8 from './../../assets/images/pro8.png'
import pro9 from './../../assets/images/pro9.png'
import pro10 from './../../assets/images/pro10.png'
import pro11 from './../../assets/images/pro11.png'


const Portfolio = ({id}) => {
  return (
    <div  className='portfolio-page' id={id}>
        <div data-aos="fade-right" data-aos-once='true' data-aos-duration="1000" className="title">
          <h1>Portfolio</h1>
        </div>
        <div  className="container">
          <div className="card"   data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-right">
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/react-strapi">
                <button>code</button>
              </a>
              <a  href="#">
                <button>viste</button>
              </a>
              </a>
            <img src={strapi} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up">
          <a className='nn' target="_blank" >
            <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/website_1/html/">
              <button>code</button>
            </a>
            <a target="_blank" href="https://abdullah-alashek.github.io/projects/website_1/html/">
              <button>Visit</button>
            </a>
            </a>
            <img src={pro7} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-left">
          <a className='nn' target="_blank" >
            <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/BR%20Architects/">
              <button>code</button>
            </a>
            <a target="_blank" href="https://abdullah-alashek.github.io/projects/BR%20Architects/">
              <button>Visit</button>
            </a>
            </a>
            <img src={pro1} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-right" >
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/website_6/">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/website_6/">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro8} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up" >
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/website_5">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/website_5/">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro9} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-left">
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/task-4">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/task-4/html/">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro5} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-right">
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/bootstrap">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/bootstrap">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro6} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up" >
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/website_4/">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/website_4/">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro11} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-left">
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/Colorlib">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/Colorlib">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro2} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-right" >
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/JOSN">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/JOSN">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro3} alt=""/>
          </div>
          <div className="card" data-aos-once='true' data-aos-duration="1000" data-aos="fade-up-left">
            <a className='nn' target="_blank" >
              <a target="_blank" href="https://github.com/abdullah-alashek/projects/tree/main/LearnByDoing">
                <button>code</button>
              </a>
              <a target="_blank" href="https://abdullah-alashek.github.io/projects/LearnByDoing">
                <button>Visit</button>
              </a>
            </a>
            <img src={pro4} alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Portfolio