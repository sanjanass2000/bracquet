// components/ContactFormSection.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  club: string;
  message: string;
}

const ContactFormSection = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    club: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-24 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Schedule a Demo
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Club Name
                </label>
                <input
                  type="text"
                  name="club"
                  value={formState.club}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                Request Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Why Schedule a Demo?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    See our intelligent court management system in action
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    Get a personalized ROI analysis for your club
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    Learn about our implementation process and timeline
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;