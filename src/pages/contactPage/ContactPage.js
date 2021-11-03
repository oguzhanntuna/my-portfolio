import React, { useEffect } from 'react';
import './ContactPage.scss';

import PageTitle from '../../components/pages/pageTitle/pageTitle';
import Form from '../../components/pages/contact/form/Form';
import PhoneIcon from '../../assets/icons/logo-phone.svg';
import MailIcon from '../../assets/icons/logo-mail.svg';
import LocationIcon from '../../assets/icons/logo-location.svg';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="contactPage">
            <PageTitle title="Contact" />
            <div className="contactPage-content">
                <div className="contactPage-infoContainer">
                    <div className="contactPage-infoContainer-description">
                        <h1>Get in touch, let's talk.</h1>
                        <p>Fill in the details and I'll get back to you as soon as I can.</p>
                    </div>
                    <div className="contactPage-infoContainer-personalInfo">
                        <div className="contactPage-contactNoContainer">
                            <div className="icon">
                                <img src={PhoneIcon} alt="linkedin" />
                            </div>
                            <span className="contactPage-contactNo">+90 534-919-4376</span>
                        </div>
                        <div className="contactPage-emailContainer">
                            <div className="icon">
                                <img src={MailIcon} alt="linkedin" />
                            </div>
                            <span className="contactPage-email">oguzhana.tuna@gmail.com</span>
                        </div>
                        <div className="contactPage-locationContainer">
                            <div className="icon">
                                <img src={LocationIcon} alt="linkedin" />
                            </div>
                            <span className="contactPage-location">Istanbul, Turkey.</span>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </section>
    );
};

export default ContactPage;