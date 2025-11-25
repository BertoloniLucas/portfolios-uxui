import React from 'react';
import { Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
    return (
        <div className="contact-section card">
            <h2 className="section-title">CONTACTO</h2>
            <div className="contact-grid">
                <div className="contact-item">
                    <Instagram size={24} />
                    <span>nacho.nuneez</span>
                </div>
                <div className="contact-item">
                    <Linkedin size={24} />
                    <span>Ignacio Nuñez Valcarce</span>
                </div>
                <div className="contact-item">
                    <Phone size={24} />
                    <span>(+54 9) 11 6568-1607</span>
                </div>
                <div className="contact-item">
                    <Mail size={24} />
                    <span>ignacionunezvalcarce@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
