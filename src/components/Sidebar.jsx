import ProfilePic from '../assets/images/pp.jpg'

import "../styles/components/sidebar.sass";
import Contact from './Contact';
import Experience from './Experience';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={ProfilePic} alt="Caio H. Portella" />
        <p className="title">Web Developer</p>
        <SocialNetworks />
        <Contact />
        <Experience />
        <a href="/CV.pdf" className="btn" target='_blank' rel='noreferrer'>Download CV</a>
    </aside>
  )
}

export default Sidebar