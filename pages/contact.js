import React from 'react';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    fetch('/api/contact', {
      method: 'POST',
    });
  };

  return (
    <div>
      <ContactForm onSubmit={onSubmitHandler} />
    </div>
  );
}

export default ContactPage;
