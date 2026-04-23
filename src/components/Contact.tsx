import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="contact-desc">
          Available for opportunities and open to global relocation. Let's connect and discuss how I can help transform your data into actionable insights.
        </p>
        
        <div className="contact-info">
          <a href="mailto:joshuvajv.d@gmail.com" className="contact-item glass-panel">
            <FaEnvelope className="contact-icon" />
            <span>joshuvajv.d@gmail.com</span>
          </a>
          <a href="tel:+9710565906727" className="contact-item glass-panel">
            <FaPhoneAlt className="contact-icon" />
            <span>+971 0565906727</span>
          </a>
          <div className="contact-item glass-panel">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Dubai, UAE</span>
          </div>
        </div>

        <div className="contact-social">
          <a href="https://github.com/Joshuva1272" target="_blank" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/joshuvajv1272/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Joshuva Jeemon. Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Contact;
