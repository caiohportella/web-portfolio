import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/contact.sass'

const Contact = () => {
  return (
    <section id="contact-info">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            {/* <div className='info'> */}
            <div>
                <h3>Telefone</h3>
                <p>(11) 9 3018-0307</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            {/* <div className='info'> */}
            <div>
                <h3>Email</h3>
                <p>caiohportella@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="location-icon" />
            {/* <div className='info'> */}
            <div>
                <h3>Localização</h3>
                <p>Jundiaí/SP</p>
            </div>
        </div>
    </section>
  )
}

export default Contact