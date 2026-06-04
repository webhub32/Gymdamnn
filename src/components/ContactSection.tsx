/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, CheckCircle, Flame } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: 'Powerlifting Peak State',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate high-tier storage submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        objective: 'Powerlifting Peak State',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="w-full bg-concrete-950 py-20 sm:py-32 relative overflow-hidden">
      {/* Absolute decorative watermark crosshair */}
      <div className="absolute top-12 right-12 text-zinc-800 pointer-events-none select-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Coordinates / Logistics */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-brand-red font-mono text-xs tracking-[0.25em] uppercase block mb-3">
                // PLATFORM ACCESS POINTS
              </span>
              <h2 className="font-display text-5xl sm:text-7xl tracking-tighter text-white uppercase font-black leading-none mb-6">
                JOIN THE FORGE <span className="text-zinc-600">/</span> CONTACT
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mb-12">
                We are situated in the raw heart of the industrial park. Hard walls, heavy bars, no vanity mirrors. Walk in with raw intentions; walk out transformed.
              </p>

              {/* Coordinates block */}
              <div className="space-y-8">
                
                {/* Location Card */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                      Physical Deployment (HQ Location)
                    </h4>
                    <p className="font-display text-xl text-white tracking-widest uppercase mt-1">
                      820 Ironwork Blvd, Suite B
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm font-mono mt-0.5">
                      Industrial District, Chicago IL
                    </p>
                  </div>
                </div>

                {/* Operations Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                      Access Schedules (Hours)
                    </h4>
                    <p className="font-display text-xl text-white tracking-widest uppercase mt-1">
                      MON – FRI // 05:00 – 22:00
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm font-mono mt-0.5">
                      Saturdays: 06:00 – 18:00 || Sundays: CLOSED
                    </p>
                  </div>
                </div>

                {/* Secure Line phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                      Secure Platform Direct Voice Line
                    </h4>
                    <p className="font-display text-xl text-white tracking-widest uppercase mt-1">
                      +1 (555) 902-6743
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm font-mono mt-0.5">
                      Operational queries only. No telemarketing.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Sub footer coordinates watermark */}
            <div className="mt-16 pt-6 border-t border-white/5 hidden lg:block">
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                SYS_STATUS: ACTIVE // POWER_GRID_LIVE // STRENGTH_MECHANICS_DEPLOYED
              </span>
            </div>
          </div>

          {/* Right Column: High-Luxury neon-red focused Inquiries form */}
          <div className="bg-concrete-800/80 border border-white/5 p-8 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-brand-red" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red" />
            
            <div className="mb-8">
              <h3 className="font-display text-3xl tracking-widest text-white uppercase font-bold">
                INITIATE TRANSFORMATION
              </h3>
              <p className="text-zinc-400 text-xs font-mono mt-1 uppercase tracking-wider">
                Declare your targets down below
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 flex flex-col items-center justify-center text-center border border-brand-red/20 bg-brand-red/5">
                <CheckCircle className="w-16 h-16 text-brand-red mb-4 animate-bounce" />
                <h4 className="font-display text-2xl text-white tracking-widest uppercase font-bold">
                  DIRECTIVE INITIATIVE FILED
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-sm">
                  Your coordinates have been registered with our coaches. Marcus or Elena will contact you within 24 operational hours. Prepare your gears.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 hoverable px-6 py-2 border border-brand-red text-white text-[10px] font-mono tracking-widest uppercase hover:bg-brand-red transition-all"
                >
                  File another directive
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full name input */}
                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-2">
                    Athletes Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Zackary Stone"
                    className="w-full text-zinc-200 bg-concrete-900 border border-zinc-800 px-4 py-3 placeholder:text-zinc-600 focus:border-brand-red focus:shadow-[0_0_15px_rgba(192,57,43,0.35)] outline-none transition-all text-sm rounded-none"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-2">
                    Primary Operational Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="athlete@forge.com"
                    className="w-full text-zinc-200 bg-concrete-900 border border-zinc-800 px-4 py-3 placeholder:text-zinc-600 focus:border-brand-red focus:shadow-[0_0_15px_rgba(192,57,43,0.35)] outline-none transition-all text-sm rounded-none"
                  />
                </div>

                {/* Specialty Dropdown */}
                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-2">
                    Active Target Objective
                  </label>
                  <select
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full text-zinc-200 bg-concrete-900 border border-zinc-800 px-4 py-3 focus:border-brand-red focus:shadow-[0_0_15px_rgba(192,57,43,0.35)] outline-none transition-all text-sm rounded-none appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23c0392b' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="Powerlifting Peak State">Powerlifting Compound Peak State</option>
                    <option value="High Intensity Engine Builder">High Intensity Metabolic Engine</option>
                    <option value="Striking Performance Conditioning">Striking Combat conditioning</option>
                    <option value="Restoration & Mobility">Restoration & Kinetic Mobility</option>
                  </select>
                </div>

                {/* Message input */}
                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-zinc-500 uppercase mb-2">
                    Direct Message / Previous Milestones
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Declare any medical limits or current Max Squat/Deadlift records below..."
                    className="w-full text-zinc-200 bg-concrete-900 border border-zinc-800 px-4 py-3 placeholder:text-zinc-600 focus:border-brand-red focus:shadow-[0_0_15px_rgba(192,57,43,0.35)] outline-none transition-all text-sm rounded-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-red hover:bg-brand-red-light text-white font-display text-lg tracking-widest font-medium uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(192,57,43,0.25)] hover:shadow-[0_0_25px_rgba(231,76,60,0.45)] hoverable"
                >
                  {isSubmitting ? (
                    <>
                      <Flame className="w-5 h-5 animate-spin text-white" />
                      <span>INITIALIZING SECURE LINK...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT SECURE ENLISTMENT</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
