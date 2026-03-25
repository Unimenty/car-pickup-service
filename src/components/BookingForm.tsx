import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Send, ShieldCheck, Zap, Sparkles, MessageCircle } from 'lucide-react';
import { ShineBorder } from './ui/shine-border';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello RiderOne! I'd like to book a ride.%0A%0A` +
                    `📍 *Pickup:* ${formData.pickup}%0A` +
                    `🏁 *Destination:* ${formData.destination}%0A` +
                    `📅 *Date:* ${formData.date}%0A` +
                    `⏰ *Time:* ${formData.time}%0A` +
                    `👥 *Passengers:* ${formData.passengers}%0A%0A` +
                    `Please confirm if you are available!`;

    const phoneNumber = "233263259860";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <ShineBorder 
      className="relative w-full rounded-[4rem] bg-slate-50 border border-slate-200 shadow-3xl overflow-hidden"
      color={["#25D366", "#3B82F6", "#A855F7", "#F97316"]}
      borderWidth={2}
      duration={14}
    >
      <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
        
        {/* Left Column: Form Content */}
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
              Fill in your itinerary details. Your dedicated chauffeur will finalize the pickup coordinates instantly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-start w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full mb-12">
              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Pickup Location</label>
                <div className="relative w-full">
                  <input 
                    type="text" required placeholder="e.g. KIA Airport, East Legon"
                    className="w-full bg-white border border-slate-100 text-slate-900 placeholder-slate-300 rounded-3xl py-5 px-6 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                    value={formData.pickup}
                    onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                  />
                  <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                </div>
              </div>

              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Final Destination</label>
                <div className="relative w-full">
                  <input 
                    type="text" required placeholder="e.g. Tema Community 1, Osu"
                    className="w-full bg-white border border-slate-100 text-slate-900 placeholder-slate-300 rounded-3xl py-5 px-6 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  />
                  <Send className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                </div>
              </div>

              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Preferred Date</label>
                <div className="relative w-full">
                  <input 
                    type="date" required
                    className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 pl-6 pr-12 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium appearance-none"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                  <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Time</label>
                  <div className="relative w-full">
                    <input 
                      type="time" required
                      className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 px-6 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-[0.65rem] font-black mb-2 pl-1 text-slate-400 uppercase tracking-[0.2em]">Guests</label>
                  <div className="relative w-full">
                    <select 
                      className="w-full bg-white border border-slate-100 text-slate-900 rounded-3xl py-5 px-6 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-base shadow-sm font-medium appearance-none cursor-pointer"
                      value={formData.passengers}
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
              className="w-full md:w-auto flex items-center justify-center gap-6 bg-[#25D366] text-white px-20 py-6 rounded-full hover:bg-[#128C7E] hover:scale-[1.03] transition-all duration-500 font-black text-xl shadow-2xl hover:shadow-green-500/20 group"
            >
              <MessageCircle className="w-7 h-7 fill-white/20" />
              <span>Reserve via WhatsApp</span>
            </button>
            <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Secured & Punctual Service • No Pre-payment Required
            </p>
          </form>
        </div>

        {/* Right Column: Benefits Sidebar */}
        <div className="hidden lg:flex w-1/3 bg-slate-100/50 border-l border-slate-200 p-16 flex-col justify-center gap-10">
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
