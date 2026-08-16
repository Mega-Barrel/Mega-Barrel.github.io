import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(''); // '' | 'loading' | 'success' | 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/saurabhjoshi7869@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section--page">
      <p>Let's connect! Whether you have any questions, feel free to drop me a message anytime.</p>

      {status === 'success' ? (
        <div style={{ marginTop: '20px' }}>
          <p>Thank you for contacting me. I will reach out to you shortly! Cheers :)</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="contactForm">
          <input type="hidden" name="_captcha" value="false" />
          <input name="name" type="text" className="feedback-input" placeholder="Name" required />
          <input name="email" type="text" className="feedback-input" placeholder="Email" required />
          <input name="subject" type="text" className="feedback-input" placeholder="Email Subject" />
          <textarea name="text" className="feedback-input" placeholder="Comment" required></textarea>

          <button type="submit" className="btn btn-lg btn-dark btn-block" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p style={{ color: 'red' }}>There was an error submitting your form. Please try again.</p>
      )}
    </section>
  );
}