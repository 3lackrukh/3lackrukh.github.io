import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StellaOctangula from '../components/TestCube';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* StellaOctangula Background */}
      <div className="absolute inset-0">
        <StellaOctangula />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900" />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold text-white">Let's Connect</h1>
            <p className="text-xl text-white/80">
              Have a question or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:border-yellow-400
                           focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50
                           transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:border-yellow-400
                           focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50
                           transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:border-yellow-400
                           focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50
                           transition-all duration-300 h-32 resize-none"
                  placeholder="What's on your mind?"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700
                         hover:from-yellow-500 hover:to-yellow-600 text-white rounded-xl
                         font-medium text-lg shadow-lg shadow-yellow-500/25
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: submitStatus !== 'idle' ? 1 : 0,
                  y: submitStatus !== 'idle' ? 0 : 10
                }}
                className={`text-center p-4 rounded-xl ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 text-green-200'
                    : submitStatus === 'error'
                    ? 'bg-red-500/20 text-red-200'
                    : ''
                }`}
              >
                {submitStatus === 'success' && "Message sent successfully!"}
                {submitStatus === 'error' && "There was an error sending your message. Please try again."}
              </motion.div>
            </form>
          </motion.div>

          {/* Alternative contact methods */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center text-white/80"
          >
            <p className="text-lg">
              Prefer email? Reach out directly at{' '}
              <a 
                href="mailto:nathan.rhys@atlasschool.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                nathan.rhys@atlasschool.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;