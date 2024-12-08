import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/8439748943'; // Replace with your WhatsApp number
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'gargsaksham092@gmail.com'; // Replace with your email
    const subject = 'Project Inquiry';
    const body = 'Hello, I would like to discuss a project with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleContactBox = () => setIsOpen((prev) => !prev);

  return (
    <div className="contact-container">
      <button
        className="contact-button"
        onClick={toggleContactBox}
      >
        Get in Touch
      </button>

      {isOpen && (
        <div className="contact-details ">
          <h3>Transform Your Vision into Reality | Work with Me!</h3>
          <p>Have a project in mind? I’m just a message away to help you get started.</p>
          <div className="contact-actions flex justify-between">
            <button onClick={handleWhatsAppClick}>WhatsApp</button>
            <button onClick={handleEmailClick}>Send Mail</button>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Container Styling */
        .contact-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1;
        }

        /* Contact Button */
        .contact-button {
          background: linear-gradient(145deg, #1e1e2f, #28293e);
          color: #fff;
          padding: 14px 24px;
          border-radius: 10px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
        }
        .contact-button:hover {
          transform: scale(1.05);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7);
        }

        /* Contact Details */
        .contact-details {
          position: absolute;
          bottom: 70px;
          right: 20px;
          width: 320px;
          padding: 20px;
          background: #1e1e2f;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          color: #fff;
          z-index: 1000;
          border: 1px solid #333;
        }
        .contact-details h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
        }
        .contact-details p {
          font-size: 14px;
          color: #bbb;
          margin-bottom: 20px;
        }

        /* Action Buttons */
        .contact-actions button {
          background: linear-gradient(145deg, #3b5998, #1e305b);
          color: white;
          padding: 12px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .contact-actions button:hover {
          background: linear-gradient(145deg, #5b73b8, #2e4478);
        }
        .contact-actions button:first-child {
          background: linear-gradient(145deg, #25D366, #128C7E);
        }
        .contact-actions button:first-child:hover {
          background: linear-gradient(145deg, #34eb98, #20a062);
        }

        /* Media Query for Responsiveness */
        @media (max-width: 768px) {
          .contact-container {
            bottom: 10px;
            right: 10px;
          }
          .contact-details {
            width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactMe;
