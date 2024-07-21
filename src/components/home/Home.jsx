import React  from 'react'
import './Home.css'
import BackParticles from './../../assets/const/BackParticles'
import myPic from './../../assets/images/my.png'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
const Home = ({id}) => {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('section-1');
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
    <div className="homepage" id={id}>
      < BackParticles />
      <div className='container'>
        <div className='content'>
          <div className="image">
            <img src={myPic} alt="" />
          </div>
          <div className="title">
          <h1>Hi, I am <span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Abdullah-Alashek',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{  display: 'inline-block' }}
              repeat={Infinity}
            />
          </span></h1>
          </div>
        
        <p>Welcome! I’m Abdullah Al-Ashek, a passionate Computer Engineer specializing in website development. I strive to create digital platforms that are not only visually appealing but also user-friendly and functional. Let’s transform your ideas into reality!</p>
              <div className="btn">
                <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}>
                        <a className="btn-cont"><button>Contact with me</button></a>
                    </Link>
                <a className="btn-down"target="_blank" href="https://drive.google.com/file/d/18QxQ5BcBlEHk2c3lPyDmi77XWdNONkcQ/view?usp=sharing"><button>Download CV</button></a>
{/*                 <a className="btn-down"target="_blank" href="https://drive.google.com/file/d/1pDprEISBvdylYqJvYZFpIH8Zdt9ugVdN/view?usp=sharing"><button>Download CV</button></a> */}
              </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home
