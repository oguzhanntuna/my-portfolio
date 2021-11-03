import React, { useState, useEffect } from 'react';
import{ init, send } from 'emailjs-com';
import './Form.scss';

import EmailKey from '../../../../env/emailkey';
import Button from '../button/Button';
import Input from '../input/Input';
import TextArea from '../textArea/TextArea';

const CustomForm = () => {
    const { USER_ID, SERVICE_ID, TEMPLATE_ID} = EmailKey;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [mailStatusText, setMailStatusText] = useState('');

    useEffect(() => {
        init(USER_ID);
    }, []);

    function sendFormData(event) {
        event.preventDefault();

        const formData = {
            "from_name": name,
            "reply_to": email,
            "message": message
        }
         
        setLoading(true);
        send(SERVICE_ID, TEMPLATE_ID, formData)
            .then(() => {
                setLoading(false);
                setMailStatusText('Email sent!');
                setTimeout(() => setMailStatusText(''), 3000);
            })
            .catch(() => {
                setLoading(false);
                setMailStatusText(`Email could not be sent!`);
                setTimeout(() => setMailStatusText(''), 3000);
            });
        resetFormData();
    }

    function resetFormData() {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form className="form" onSubmit={event => sendFormData(event)}>
            <Input 
                value={name} 
                onChange={event => setName(event.target.value)} 
                type="text"
                placeholder='Name' 
            />
            <Input 
                value={email} 
                onChange={event => setEmail(event.target.value)} 
                type="email"
                placeholder='Email' 
            />
            <TextArea 
                value={message} 
                onChange={event => setMessage(event.target.value)} 
                type="text"
                label='Message' 
                placeholder='Type your message here' />
            <Button 
                buttonTitle={
                    loading 
                        ? 'Loading...' 
                        :  mailStatusText !== ''
                            ? mailStatusText
                            : 'Send'
                } 
            />
        </form>
    );
}

export default CustomForm;