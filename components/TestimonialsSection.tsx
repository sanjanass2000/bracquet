// components/TestimonialsSection.tsx
'use client';

import React from 'react';

const testimonials = [
  {
    quote: "The intelligent scheduling system has transformed how we manage our courts. Member satisfaction is at an all-time high.",
    name: "Sarah Thompson",
    role: "Club Manager",
    club: "Oakridge Tennis Club"
  },
  {
    quote: "Implementation was smooth and the ROI has exceeded our expectations. The analytics provide invaluable insights.",
    name: "Michael Chen",
    role: "Operations Director",
    club: "Westside Athletic Club"
  },
  {
    quote: "The automated court management has freed up our staff to focus on what matters most - our members.",
    name: "Amanda Rodriguez",
    role: "Tennis Director",
    club: "Harbor Point Sports"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-24 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-blue-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-blue-400">{testimonial.club}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;