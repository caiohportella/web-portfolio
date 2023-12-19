import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/caiohportella/',
        icon: <FaLinkedinIn />
    },
    {
        name: 'github',
        url: 'https://www.github.com/caiohportella/',
        icon: <FaGithub />
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/caiohportella/',
        icon: <FaInstagram />
    }
]


const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((social) => (
            <a href={social.url} className="social-btn" key={social.name} id={social.name} target='_blank' rel='noreferrer'>
                {social.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks