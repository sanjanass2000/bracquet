// components/TestimonialsSection.tsx
'use client';

import React from 'react';
// Removed unused Image import

const testimonials = [
  {
    quote: "Bracquets transformed our court management system while preserving our club's unique traditions and protocols.",
    author: "James Mitchell",
    position: "Tennis Director, Riverside Country Club",
    image: "/images/testimonial1.jpg" // Add placeholder images to your public/images folder
  },
  {
    quote: "Their custom solution increased court utilization by 32% and significantly reduced administrative workload.",
    author: "Sarah Knowles",
    position: "Club Manager, Oak Hills Tennis Club",
    image: "/images/testimonial2.jpg"
  },
  {
    quote: "The level of personalization and attention to our specific needs was unmatched by any other vendor.",
    author: "Michael Chen",
    position: "Board Member, Lakeside Athletic Club",
    image: "/images/testimonial3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[var(--neutral-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">TESTIMONIALS</span>
          <h2 className="text-4xl mt-4 text-[var(--neutral-dark)] font-mono font-semibold">
            What Club Leaders Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} 
                className="bg-white p-8 rounded-lg shadow-lg border border-[var(--neutral-beige)] hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 text-4xl text-[var(--primary-blue)]">
                &quot;
              </div>
              <p className="text-[var(--neutral-brown)] italic mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden relative">
                  {/* You can replace this with actual images */}
                  <div className="absolute inset-0 bg-[var(--primary-blue)]/20"></div>
                </div>
                <div>
                  <p className="font-semibold text-[var(--neutral-dark)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--neutral-brown)]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;