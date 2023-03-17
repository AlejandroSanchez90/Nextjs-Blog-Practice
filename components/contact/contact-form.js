import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

function ContactForm({ onSubmit }) {
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'pending' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');
    try {
      await sendContactData({ email: enteredMail, name: enteredName, message: enteredMessage });
      setRequestStatus('success');
      setEnteredMail('');
      setEnteredMessage('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notificationData;

  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message is on its way',
    };
  }

  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success',
      message: 'Message sent succesfully',
    };
  }

  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredMail}
              onChange={(event) => setEnteredMail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            rows='10'
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
