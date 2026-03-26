import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Send, ShieldCheck, Zap, Sparkles, MessageCircle, Car, X } from 'lucide-react';
import { ShineBorder } from './ui/shine-border';
import { useForm, ValidationError } from '@formspree/react';

const BookingForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mqegkbln");
  const [refNumber] = useState(() => `R1-${Math.floor(1000 + Math.random() * 9000)}`);

  // We still use local state for input values to keep the UI reactive
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1'
  });

  return (
    <ShineBorder 
      className="relative w-full rounded-[4rem] bg-slate-50 border border-slate-200 shadow-3xl overflow-hidden"
      color={["#25D366", "#3B82F6", "#A855F7", "#F97316"]}
      borderWidth={2}
      duration={14}
    >
      <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
        
        {/* Conditional Rendering: Form vs Success State */}
        {!state.succeeded ? (
          <div className="flex-1 p-8 md:p-16 lg:p-20 text-left">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 fill-primary" />
                <span className="text-[0.65rem] font-black uppercase tracking-widest">Premium Service Reservation</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter leading-none italic uppercase">
                Ready to <span className="text-primary italic">Secure</span> Your Ride?
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Fill in your itinerary details. Your dedicated chauffeur will finalize the pickup coordinates instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-start w-full">
              {/* Essential Hidden Fields for Formspree mapping */}
              <input type="hidden" name="reference" value={refNumber} />
              <input type="hidden" name="_subject" value={`New RiderOne Reservation | ${refNumber}`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-8 w-full mb-12">
                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Pickup Location</label>
                  <div className="relative w-full">
                    <input 
                      name="pickup"
                      type="text" required placeholder="e.g. KIA Airport, East Legon"
                      className="w-full bg-white border border-slate-100 text-slate-900 placeholder-slate-300 rounded-3xl py-5 pl-6 pr-14 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                      value={formData.pickup}
                      disabled={state.submitting}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                    />
                    <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                    <ValidationError prefix="Pickup" field="pickup" errors={state.errors} className="text-[10px] text-red-500 font-bold ml-4 mt-1 uppercase" />
                  </div>
                </div>

                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Final Destination</label>
                  <div className="relative w-full">
                    <input 
                      name="destination"
                      type="text" required placeholder="e.g. Tema Community 1, Osu"
                      className="w-full bg-white border border-slate-100 text-slate-900 placeholder-slate-300 rounded-3xl py-5 pl-6 pr-14 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                      value={formData.destination}
                      disabled={state.submitting}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                    <Send className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                    <ValidationError prefix="Destination" field="destination" errors={state.errors} className="text-[10px] text-red-500 font-bold ml-4 mt-1 uppercase" />
                  </div>
                </div>

                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Preferred Date</label>
                  <div className="relative w-full">
                    <input 
                      name="date"
                      type="date" required
                      className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 pl-6 pr-12 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium appearance-none"
                      value={formData.date}
                      disabled={state.submitting}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                    <ValidationError prefix="Date" field="date" errors={state.errors} className="text-[10px] text-red-500 font-bold ml-4 mt-1 uppercase" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="relative flex flex-col items-start w-full group">
                    <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Time</label>
                    <div className="relative w-full">
                      <input 
                        name="time"
                        type="time" required
                        className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 pl-6 pr-12 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                        value={formData.time}
                        disabled={state.submitting}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col items-start w-full group">
                    <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Guests</label>
                    <div className="relative w-full">
                      <select 
                        name="passengers"
                        className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 pl-6 pr-12 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium appearance-none cursor-pointer"
                        value={formData.passengers}
                        disabled={state.submitting}
                        onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                      >
                        {[1,2,3,4,5,6,7].map(num => (
                          <option key={num} value={num}>{num} Pax</option>
                        ))}
                      </select>
                      <Users className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full md:w-auto flex items-center justify-center gap-6 bg-primary text-white px-20 py-6 rounded-full hover:scale-[1.03] active:scale-95 transition-all duration-500 font-black text-xl shadow-2xl shadow-primary/20 disabled:opacity-50 disabled:cursor-wait group overflow-hidden relative"
              >
                {state.submitting ? (
                  <>
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying Schedule...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-7 h-7 fill-white/20 group-hover:animate-pulse" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
              
              {state.errors && !state.succeeded && (
                <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-4 text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-red-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <X className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold leading-relaxed tracking-tight">
                    Submission Error
                    <div className="mt-2 font-black uppercase text-[10px] tracking-widest opacity-60">
                      Check your connection or contact us via WhatsApp
                    </div>
                  </div>
                </div>
              )}
              
              <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Secured Submission • No Pre-payment Required
              </p>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE CARD (state.succeeded) */
          <div className="flex-1 p-8 md:p-16 lg:p-24 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-2xl shadow-green-500/10">
              <ShieldCheck className="w-12 h-12" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter italic uppercase">
              Booking <span className="text-green-500 italic">Confirmed</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-md">
              Your request has been filed successfully. A professional chauffeur will finalize your coordinates momentarily.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 w-full max-w-md mb-12 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Car className="w-24 h-24 -rotate-12" />
              </div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Reference Number</p>
              <p className="text-5xl font-black text-slate-900 tracking-tighter italic">{refNumber}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-10 py-5 rounded-full border border-slate-200 font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all"
              >
                New Booking
              </button>
              <a 
                href={`https://wa.me/233263259860?text=Hello RiderOne, I just booked with Reference: ${refNumber}. Let's discuss pickup!`}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full hover:bg-[#128C7E] transition-all font-black text-xs uppercase tracking-widest shadow-xl shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Speed up via WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Right Column: Benefits Sidebar */}
        <div className="hidden lg:flex w-1/4 bg-slate-100/50 border-l border-slate-200 p-16 flex-col justify-center gap-10">
          <div className="flex flex-col gap-3">
            <div className="bg-primary/10 p-4 rounded-2xl w-fit">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 tracking-tight">Why Book Now?</h4>
            <p className="text-slate-500 font-medium leading-relaxed">Secure your slot today with zero commitment fees. We prioritize safety and punctuality for every ride.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <h5 className="font-bold text-slate-900 uppercase text-[0.65rem] tracking-widest mb-1">Live Tracking</h5>
                <p className="text-slate-500 text-sm leading-snug">We monitor your flight or arrival time automatically.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <h5 className="font-bold text-slate-900 uppercase text-[0.65rem] tracking-widest mb-1">Elite Comfort</h5>
                <p className="text-slate-500 text-sm leading-snug">Spacious leather seating and premium climate control.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <h5 className="font-bold text-slate-900 uppercase text-[0.65rem] tracking-widest mb-1">No Surprises</h5>
                <p className="text-slate-500 text-sm leading-snug">Fixed pricing agreed before your journey begins.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ShineBorder>
  );
};

export default BookingForm;
