import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/8439748943';
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'gargsaksham092@gmail.com';
    const subject = 'Project Inquiry';
    const body = 'Hello, I would like to discuss a project with you.';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleContactBox = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <motion.button
        className="relative px-6 py-3 rounded-lg font-semibold text-white cursor-pointer overflow-hidden"
        onClick={toggleContactBox}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, #1e1e2f 0%, #28293e 100%)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 1)'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(168,255,247,0.2) 0%, rgba(59,130,246,1) 100%)',
              'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.2) 100%)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <span className="relative z-10">Get in Touch</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-16 right-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden"
            style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            <div className="relative p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Transform Your Vision into Reality
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Have a project in mind? I&apos;m just a message away to help you get started.
              </p>
              <div className="flex justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors"
                  onClick={handleEmailClick}
                >
                  Send Mail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-colors"
                  onClick={handleWhatsAppClick}
                >
                  WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactMe;