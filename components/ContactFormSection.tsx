// components/ContactFormSection.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  club: string;
  position: string;
  message: string;
  submitted: boolean;
}

const ContactFormSection = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    club: '',
    position: '',
    message: '',
    submitted: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log(formState);
    // For now, just simulate a submission
    setFormState(prev => ({ ...prev, submitted: true }));
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        club: '',
        position: '',
        message: '',
        submitted: false
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--neutral-brown)] font-medium tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl text-[var(--neutral-brown)] font-mono mt-4 mb-8">
            Ready to Elevate Your Club&apos;s Experience?
          </h2>
          <p className="text-neutral-600 mb-12 max-w-2xl mx-auto text-lg font-mono">
            Contact us to discuss how we can create a custom solution that perfectly matches Austin Country Club&apos;s needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          {formState.submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-[var(--neutral-brown)]">
                Your message has been received. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
                    Club Name
                  </label>
                  <input
                    type="text"
                    id="club"
                    name="club"
                    required
                    value={formState.club}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={formState.position}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
                />
              </div>
              
              <button 
                type="submit"
                className="bg-[var(--neutral-brown)] text-white px-8 py-3 rounded-full inline-flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors w-full md:w-auto"
              >
                Send Message
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;