import ProfilePic from '../assets/images/pp.jpg'

import "../styles/components/sidebar.sass";
import Contact from './Contact';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={ProfilePic} alt="Caio H. Portella" />
        <p className="title">Web Developer</p>
        <SocialNetworks />
        <Contact />
        <a href="" className="btn">Download CV</a>
    </aside>
  )
}

export default Sidebar