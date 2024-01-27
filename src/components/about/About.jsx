import React from 'react'
import './About.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const About = ({id}) => {
  return (
    <div id={id}>
    <div className='about-page' >
        <div data-aos="fade-right" data-aos-once='true' className="title" data-aos-duration="1000">
          <h1>About <span>Me</span></h1>
        </div>
        <div className="conteniar">

        <div className='text' data-aos="fade-up" data-aos-duration="1000" data-aos-once='true' >
          <p>Hello, I am Abdullah Al-Ashek, a computer engineer specializing in front-end development. My journey began with self-learning on the internet, where I gained deep knowledge and extensive experience in front-end development using React js.</p>
          <p>I consider myself a true innovator, driven by an endless passion for continuous learning and innovation. I always strive to stay updated with the latest developments and innovations in the field of front-end development, and I am eager to apply this knowledge in every project I work on.</p>
          <p>I believe that success in any project requires dedication and excellence in work, and this is what I aim to achieve every time. I am committed to delivering the highest quality of work, and I always aim to achieve amazing results that exceed customer expectations.</p>
        </div> 
        <div className="myskill" data-aos="fade-down" data-aos-duration="1000" data-aos-once='true'>
        <div className="title">
            My<br/>Skills
          </div>
        <div className="skil">

          <div className="point1 point">
            <FaReact className='icon' />
            <p>React</p>
            </div>
          <div className="point2 point">
            <FaHtml5 className='icon'  />
            <p>Html</p>
            </div>
          <div className="point3 point">
            <FaCss3Alt className='icon' />
            <p>Css</p>
            </div>
          <div className="point4 point">
            <FaBootstrap className='icon' />
            <p>Bootstrap</p>
            </div>
          <div className="point5 point">
            <FaGitAlt className='icon' />
            <p>Git</p>
            </div>
          <div className="point6 point">
            <FaPhp className='icon' />
            </div>
          <div className="point7 point">
            <BiLogoRedux className='icon' />
              <p>Redux</p>
            </div>
          <div className="point8 point">
            <SiMysql className='icon' />
            </div>
        </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default About