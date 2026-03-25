import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Send } from 'lucide-react';

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
    
    // Construct the professional message for WhatsApp
    const message = `Hello RiderOne! I'd like to book a ride.%0A%0A` +
                    `📍 *Pickup:* ${formData.pickup}%0A` +
                    `🏁 *Destination:* ${formData.destination}%0A` +
                    `📅 *Date:* ${formData.date}%0A` +
                    `⏰ *Time:* ${formData.time}%0A` +
                    `👥 *Passengers:* ${formData.passengers}%0A%0A` +
                    `Please confirm if you are available!`;

    // Dad's WhatsApp Number
    const phoneNumber = "233263259860";
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-black z-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
          
          <div className="mb-10 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Ready to Book Your Ride?</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">Fill in your details below and we'll finalize your booking instantly on WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-4xl mb-12">
              
              {/* Pickup */}
              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-xs font-semibold mb-2 pl-1 text-cyan-400 uppercase tracking-widest">Pickup Location</label>
                <div className="relative w-full">
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. KIA Airport, East Legon"
                    className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-600 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all text-sm shadow-inner"
                    value={formData.pickup}
                    onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                  />
                  <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Destination */}
              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-xs font-semibold mb-2 pl-1 text-cyan-400 uppercase tracking-widest">Destination</label>
                <div className="relative w-full">
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Tema Community 1, Osu"
                    className="w-full bg-white/[0.04] border border-white/[0.1] text-white placeholder-slate-600 rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all text-sm shadow-inner"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  />
                  <Send className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Date */}
              <div className="relative flex flex-col items-start w-full group">
                <label className="block text-xs font-semibold mb-2 pl-1 text-cyan-400 uppercase tracking-widest">Pickup Date</label>
                <div className="relative w-full">
                  <input 
                    type="date" 
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.1] text-white rounded-2xl py-4 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all text-sm shadow-inner appearance-none"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    style={{ colorScheme: 'dark' }}
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Time & Passengers Grid */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-xs font-semibold mb-2 pl-1 text-cyan-400 uppercase tracking-widest">Time</label>
                  <div className="relative w-full">
                    <input 
                      type="time" 
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.1] text-white rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all text-sm shadow-inner"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      style={{ colorScheme: 'dark' }}
                    />
                    <Clock className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <div className="relative flex flex-col items-start w-full group">
                  <label className="block text-xs font-semibold mb-2 pl-1 text-cyan-400 uppercase tracking-widest">Passengers</label>
                  <div className="relative w-full">
                    <select 
                      className="w-full bg-white/[0.04] border border-white/[0.1] text-white rounded-2xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all text-sm shadow-inner appearance-none cursor-pointer"
                      value={formData.passengers}
                      onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7].map(num => (
                        <option key={num} value={num} className="bg-slate-900 text-white">{num}</option>
                      ))}
                    </select>
                    <Users className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* The Unified WhatsApp Button */}
            <button 
              type="submit"
              className="flex items-center gap-4 bg-[#25D366] text-black px-12 py-5 rounded-full hover:bg-[#128C7E] hover:scale-[1.02] transition-all duration-300 font-bold text-lg shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Book via WhatsApp Now</span>
            </button>
            <p className="mt-4 text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">Punctual & Reliable • Response in Minutes</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
