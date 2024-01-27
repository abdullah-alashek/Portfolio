import React from 'react'
import './contact.css'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact = ({id}) => {
  return (
    <div className='contact-page' id={id}>
        <div className="title" data-aos="fade--right" data-aos-once='true' data-aos-duration="1000" >
          <h1>Contact <span>Me</span></h1>
        </div>
        <div className="conteniar">
          <div className="links" data-aos="fade-up-right" data-aos-once='true' data-aos-duration="1000">
            <div className="icon-p">
              <FaSquarePhone className='icon' />
              <p>+963 988785395</p>
            </div>
            <div className="icon-p">
              <MdEmail className='icon' />
              <p>e.abdullah.alashek@gmail.com</p>
            </div>
            <div className="icons">
              <a target="_blank" href="https://www.facebook.com/abdullah.alashek.31?mibextid=ZbWKwL"><FaFacebookSquare className='icon'/></a>
              <a target="_blank" href="https://www.linkedin.com/in/abdullah-alashek-362969242"><FaLinkedin className='icon'/></a>
              <a target="_blank" href="https://github.com/abdullah-alashek"><FaGithubSquare className='icon'/></a>
            </div>
          </div>
          <div className="form" data-aos="flip-left" data-aos-once='true' data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <form action="#">
              <input  className='subj' type="text"  placeholder="Full Name"/>
              <input className='email' type="email"  placeholder="Email address"/>
              <input className='subj' type="text"  placeholder="Subject of the message"/>
              <textarea className='message' name="" id="" cols="30" rows="6"  placeholder="Type your message here.."></textarea>
              <input className='subm' type="submit"  value="Send Message"/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact