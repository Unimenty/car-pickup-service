"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  { 
    name: "Kofi Asante", 
    role: "Frequent Traveler", 
    text: "The Voxy was spotless and the driver was 15 minutes early for my 3 AM flight. Best service in Accra." 
  },
  { 
    name: "Ama Mensah", 
    role: "Family Trip", 
    text: "Perfect for our family trip to Tema. Plenty of room for all our bags and the AC was ice cold." 
  },
  { 
    name: "Yaw Boateng", 
    role: "Business Executive", 
    text: "Reliable, professional, and consistent. RiderOne is my go-to for all my city pickups." 
  },
  { 
    name: "Esi Taylor", 
    role: "Tourist", 
    text: "Safe and comfortable. The driver knew all the best routes to avoid traffic. Highly recommended!" 
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <div class="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center overflow-hidden px-4">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full px-4 md:px-12"
        >
          <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center gap-8">
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-xl md:text-3xl font-black text-slate-900 tracking-tight italic leading-relaxed">
              "{testimonials[index].text}"
            </p>
            
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-slate-900">{testimonials[index].name}</p>
              <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mt-1">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 md:left-0 z-30 p-4 rounded-full bg-white border border-slate-100 shadow-xl hover:bg-slate-50 transition-all active:scale-95"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-slate-900" />
      </button>
      <button
        className="absolute right-2 md:right-0 z-30 p-4 rounded-full bg-white border border-slate-100 shadow-xl hover:bg-slate-50 transition-all active:scale-95"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-slate-900" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex gap-2 z-30">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-primary w-8" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
