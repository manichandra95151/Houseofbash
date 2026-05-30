'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { useCart, AVAILABLE_SLOTS } from '../../context/CartContext'

interface SelectedItem {
  name: string
  price: number
}

const BASE_PRICE = 2500

const enhancements = [
  { name: 'Flower Bouquet', desc: 'A beautiful arrangement of fresh seasonal flowers.', price: 600 },
  { name: 'Vehicle Entry', desc: 'Exclusive access to bring your vehicle directly to the venue entrance.', price: 350 },
  { name: 'Fire Coils', desc: 'Sparkling cold-fire fountains for a magical entrance (1 set).', price: 400 },
  { name: 'Single Rose', desc: 'A single, elegant long-stemmed red rose.', price: 100 },
  { name: 'Party Props', desc: 'Fun and themed props like hats and signs for your photos.', price: 250 },
]

const foods = [
  {
    name: 'Artisanal Pizza',
    desc: 'Freshly baked pizza with premium cheese and delicious toppings.',
    price: 350,
    priceLabel: '₹350 (Per Unit)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSPim7rnp8tYtcIiXWei0qHAk-yVkkQsWF0mQKQ2AfRZSOKJQdszw9ZsczgSUEbOpx1W8VL76UI6LXcwZBvQoESxfox-jqbbORRu0p0F8Bp3VRhRLd48h0ppXPEGpn3TJSUOzm5efIgbnictdu76Tu9YADOF-Ly7A9C1h_p9j9lvrZWAuok-cCtgtYCfXCiq3Ng7MPmuei-h-HTSejBApPe915qDnO-zr-ocxOEZJglV5BCHSCf_lrXQkdLEnWntCHJNtqxr0i_Kq',
  },
  {
    name: 'House Burger',
    desc: 'Juicy, freshly made burger served on a soft toasted bun.',
    price: 350,
    priceLabel: '₹350 (Per Unit)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgYSyLmsKjAYkJFf__-56IfCJ4Wr3CnkJjeQ29LzlejPzWqGCR-U-92jRfKXPgUvsbxjC-PSfZ9ssoTgXs2JIJUED6OfMPS4Q7ohGS1_TKaaQZ4BgBzbNdmDGFS_DxgQUdfx0UTbrxwDb1D9D9U7cfat8UFIJrkQnibaQjMmGZ0OC-KgHr3skBxtNaKbsGRKTPoY1VXo-h3enYynW7PY73oLDMpClB5o80srBjQmnfjJCP0Z7dnnv191m_woDgCw8nU89yJ3FITr4',
  },
  {
    name: 'Gourmet Frankie',
    desc: 'Delicious, warm wraps filled with our special spiced fillings.',
    price: 250,
    priceLabel: '₹250 (Per Unit)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAicA20t1OXHb3zrQONEKaPOS1AR86HHXl0fRq1cUI8qi3bZuBdjGuYgYSX3TVmeHX_G3pHIRl3xuzAaMwXYV21aRbc9tLT0tSDJSVdAWjF5n-D3dr_aER2gHa2dkOuTEuRW6JK8EpAAIJdNY-huv2mkwMXc02lmkvzx6wI7kVeHA3UyhSYxEDZehx64eoDpDSFVb2RR0sI08VTUR5jAkm-OdHSmx5kKI5kirlVnX8KeP4ib20MSLDTZ7Vx2aaYkevE2wKyXf3GTtxA',
  },
]

export default function AddonsPage() {
  const { items, toggleItem, isSelected, total, basePrice, selectedSlot, setSelectedSlot, extraGuests, setExtraGuests, extraKids, setExtraKids } = useCart()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <header className="pt-20 pb-12 px-5 md:px-8 max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <div className="w-[80px] h-px bg-secondary mx-auto mb-8" />
            <h1 className="font-display text-4xl md:text-[48px] text-primary mb-5">Your Bespoke Celebration</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              From our fundamental celebration package to curated luxury enhancements, discover everything you need for a masterpiece event.
            </p>
          </ScrollReveal>
        </header>

        {/* Base Package */}
        <section className="pb-14 px-5 md:px-8 max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="bg-primary-container border border-secondary/20 p-8 md:p-12 relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex-1">
                  <span className="font-body text-[11px] tracking-[0.3em] font-bold text-secondary-fixed mb-4 block uppercase">
                    The Foundation
                  </span>
                  <h2 className="font-display text-3xl md:text-[40px] text-white mb-5">Base Celebration Package</h2>
                  <p className="text-on-primary-container text-base md:text-lg mb-8 max-w-xl font-body">
                    Every celebration starts here. A complete {basePrice === 1800 ? '1.5' : '3'}-hour private theatre experience with beautiful decorations, perfect for small groups.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {[
                      { icon: 'groups', label: 'Up to 5 Guests Included', sub: '' },
                      { icon: 'schedule', label: `${basePrice === 1800 ? '1.5' : '3'} Hours Private Access`, sub: '' },
                      { icon: 'auto_awesome', label: 'Beautiful Decorations', sub: '' },
                    ].map((feat) => (
                      <div key={feat.label} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed mt-0.5">{feat.icon}</span>
                        <div>
                          <span className="text-white text-sm font-body font-bold block">{feat.label}</span>
                          {feat.sub && <p className="text-on-primary-container text-[10px] mt-1 leading-tight font-body">{feat.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-8 bg-primary/50 border border-secondary/20 min-w-[220px]">
                  <span className="text-secondary-fixed font-body text-[10px] tracking-widest font-bold mb-2 uppercase">STARTING FROM</span>
                  <div className="font-display text-5xl text-white mb-2">₹{basePrice.toLocaleString('en-IN')}</div>
                  <span className="text-on-primary-container text-[10px] font-body uppercase tracking-tight">Essential Foundation</span>
                  <span className="text-on-primary-container text-[10px] font-body text-center mt-4 leading-relaxed">
                    ₹1000 advance payment required to confirm booking
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Select Your Slot Header */}
        <div className="pt-10 px-5 md:px-8 max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <span className="font-body text-[11px] tracking-[0.25em] font-bold text-secondary uppercase block mb-4">Timing</span>
            <h2 className="font-display text-[28px] md:text-[32px] text-primary">Select Your Slot</h2>
            <div className="w-[60px] h-px bg-secondary mx-auto mt-5" />
          </ScrollReveal>
        </div>

        {/* Slots Grid */}
        <section className="py-10 px-5 md:px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {AVAILABLE_SLOTS.map((slot) => {
              const isDiscounted = slot.time === '08:00 AM – 09:30 AM' || slot.time === '05:00 PM – 06:30 PM'
              return (
                <ScrollReveal key={slot.name}>
                  <div
                    onClick={() => setSelectedSlot(slot)}
                    className={`cursor-pointer border p-6 flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden ${
                      selectedSlot?.name === slot.name
                        ? 'border-secondary bg-secondary/5 shadow-sm'
                        : 'border-primary/10 hover:border-secondary/50'
                    }`}
                  >
                    {isDiscounted && (
                      <div className="absolute top-0 right-0 bg-secondary text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase rounded-bl-lg">
                        Save ₹700
                      </div>
                    )}
                    <div className="absolute top-0 left-0 bg-primary/5 text-primary text-[9px] font-bold tracking-widest px-3 py-1 uppercase rounded-br-lg border-b border-r border-primary/10">
                      {isDiscounted ? '1.5 HR' : '3 HR'}
                    </div>
                    <span className="font-body text-[11px] tracking-[0.2em] font-bold text-secondary mb-2 mt-2 block uppercase">{slot.name}</span>
                    <span className="font-display text-lg text-primary">{slot.time}</span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>

        {/* Optional Add-ons Header */}
        <div className="pt-10 px-5 md:px-8 max-w-[1280px] mx-auto text-center">
          <ScrollReveal>
            <span className="font-body text-[11px] tracking-[0.25em] font-bold text-secondary uppercase block mb-4">Enhance Your Booking</span>
            <h2 className="font-display text-[28px] md:text-[32px] text-primary">Optional Add-ons</h2>
            <div className="w-[60px] h-px bg-secondary mx-auto mt-5" />
          </ScrollReveal>
        </div>

        {/* Bento Grid: Photo & Fog */}
        <section className="py-10 px-5 md:px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Extra Persons Add-on */}
            <ScrollReveal className="md:col-span-12" direction="up">
              <div className="bg-surface-container-lowest border border-primary/10 p-8 flex flex-col md:flex-row justify-between items-center gap-8 min-h-[200px] transition-all duration-300">
                <div className="flex-1">
                  <span className="font-body text-[11px] tracking-[0.2em] font-bold text-secondary mb-2 block uppercase">
                    Bring Your Loved Ones
                  </span>
                  <h3 className="font-display text-2xl md:text-[28px] text-primary mb-3">
                    Extra Guests & Kids
                  </h3>
                  <p className="text-on-surface-variant max-w-xl font-body text-sm leading-relaxed">
                    The base package includes up to 5 guests. Add more guests below. Guests (Age 10+) are charged at <strong>₹350/head</strong> and kids (above 5 years) at <strong>₹150/head</strong>.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-8 w-full md:w-auto">
                  {/* Extra Guests Counter */}
                  <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/5 min-w-[140px] w-full sm:w-auto">
                    <span className="font-body text-[10px] tracking-wider text-on-surface-variant font-bold mb-2 uppercase">Guests (Age 10+)</span>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setExtraGuests(Math.max(0, extraGuests - 1))}
                        className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all text-primary font-bold text-lg select-none"
                      >
                        -
                      </button>
                      <span className="font-display text-2xl text-primary w-6 text-center">{extraGuests}</span>
                      <button 
                        onClick={() => setExtraGuests(extraGuests + 1)}
                        className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all text-primary font-bold text-lg select-none"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[10px] text-on-surface-variant/60 font-body mt-2">₹350 each</span>
                  </div>

                  {/* Kids Counter */}
                  <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/5 min-w-[140px] w-full sm:w-auto">
                    <span className="font-body text-[10px] tracking-wider text-on-surface-variant font-bold mb-2 uppercase">Kids (Above 5)</span>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setExtraKids(Math.max(0, extraKids - 1))}
                        className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all text-primary font-bold text-lg select-none"
                      >
                        -
                      </button>
                      <span className="font-display text-2xl text-primary w-6 text-center">{extraKids}</span>
                      <button 
                        onClick={() => setExtraKids(extraKids + 1)}
                        className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all text-primary font-bold text-lg select-none"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[10px] text-on-surface-variant/60 font-body mt-2">₹150 each</span>
                  </div>

                  {/* Pricing Subtotal Display */}
                  <div className="flex flex-col items-center md:items-end justify-center min-w-[120px]">
                    <span className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase font-bold mb-1">Subtotal</span>
                    <span className="font-display text-2xl text-secondary">
                      ₹{(extraGuests * 350 + extraKids * 150).toLocaleString()}
                    </span>
                    {(extraGuests > 0 || extraKids > 0) && (
                      <span className="text-[10px] text-secondary font-body font-bold mt-1 uppercase tracking-wider">
                        ✓ Added
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Photography */}
            <ScrollReveal className="md:col-span-8" direction="left">
              <div
                onClick={() => toggleItem({ name: 'Photo & Cinematography', price: 1000 })}
                className={`cursor-pointer bg-surface-container-lowest border p-8 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-300 group ${
                  isSelected('Photo & Cinematography') ? 'item-selected' : 'border-primary/10 hover:border-secondary/30'
                }`}
              >
                <div>
                  <span className="font-body text-[11px] tracking-[0.2em] font-bold text-secondary mb-4 block uppercase">Capturing Moments</span>
                  <h3 className="font-display text-2xl md:text-[28px] text-primary mb-4">Professional Photo & Cinematography</h3>
                  <p className="text-on-surface-variant mb-6 max-w-md font-body text-base">
                    Professional photography and video recording to perfectly capture all the special moments of your celebration.
                  </p>
                </div>
                <div className="flex justify-between items-end flex-wrap gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-primary">₹1,000</span>
                    <span className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase font-bold">FULL SESSION</span>
                  </div>
                  <button
                    className={`px-6 py-2 font-body text-[10px] tracking-widest font-bold uppercase transition-all duration-300 ${
                      isSelected('Photo & Cinematography')
                        ? 'bg-secondary text-white'
                        : 'bg-primary text-white hover:bg-secondary'
                    }`}
                  >
                    {isSelected('Photo & Cinematography') ? '✓ Added' : 'Add to Experience'}
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Fog Entry */}
            <ScrollReveal className="md:col-span-4" direction="right">
              <div
                onClick={() => toggleItem({ name: 'Grand Fog Entry', price: 700 })}
                className={`cursor-pointer bg-primary text-white p-8 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-300 group border ${
                  isSelected('Grand Fog Entry') ? 'border-secondary-fixed' : 'border-transparent hover:border-secondary-fixed/40'
                }`}
              >
                <div className="flex justify-center py-6">
                  <span
                    className="material-symbols-outlined text-6xl text-secondary-fixed group-hover:scale-110 transition-transform duration-500"
                  >
                    cloudy_snowing
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Grand Fog Entry</h3>
                  <p className="text-on-primary-container text-sm mb-5 font-body">
                    A magical, cinematic entrance with beautiful low-lying fog covering the floor as you walk in.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-fixed font-display text-xl">₹700</span>
                    <button
                      className={`px-5 py-2 font-body text-[10px] tracking-widest font-bold uppercase transition-all duration-300 ${
                        isSelected('Grand Fog Entry')
                          ? 'bg-white text-primary'
                          : 'bg-secondary-fixed text-on-secondary-fixed hover:bg-white'
                      }`}
                    >
                      {isSelected('Grand Fog Entry') ? '✓ Added' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Cakes */}
            <ScrollReveal className="md:col-span-12">
              <div className="bg-[#f0f7ff] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 md:gap-20 border border-primary/5">
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-[42px] text-primary mb-5">Artisanal Cakes</h3>
                  <p className="text-on-surface-variant mb-12 font-body text-base max-w-lg">
                    Delicious, freshly baked cakes available in our signature flavors, made perfectly for your celebration.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-12 md:gap-16">
                    {[
                      { label: '0.5 KG SELECTION', price: 650, name: 'Artisanal Cake (0.5 KG)' },
                      { label: '1.0 KG SELECTION', price: 1000, name: 'Artisanal Cake (1.0 KG)' },
                    ].map((cake, idx) => (
                      <div 
                        key={cake.name} 
                        className={`flex-1 flex flex-col items-start gap-6 ${idx === 0 ? 'sm:border-r border-primary/10 sm:pr-16' : ''}`}
                      >
                        <div>
                          <span className="font-body text-[11px] tracking-[0.15em] font-bold text-secondary uppercase block mb-1">{cake.label}</span>
                          <span className="text-3xl font-display text-primary block">₹{cake.price.toLocaleString()}</span>
                        </div>
                        <button
                          onClick={() => toggleItem({ name: cake.name, price: cake.price })}
                          className={`px-8 py-2.5 font-body text-[11px] tracking-widest font-bold uppercase transition-all duration-300 ${
                            isSelected(cake.name) 
                              ? 'bg-secondary text-white' 
                              : 'bg-primary text-white hover:bg-secondary'
                          }`}
                        >
                          {isSelected(cake.name) ? '✓ Added' : 'Add'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-[420px] aspect-[4/3] relative overflow-hidden shadow-xl rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800"
                    alt="Artisanal Cake"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bespoke Enhancements */}
        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-5">
                <div>
                  <div className="w-[60px] h-px bg-secondary mb-4" />
                  <h2 className="font-display text-2xl md:text-[28px] text-primary uppercase tracking-widest">Bespoke Enhancements</h2>
                </div>
                <p className="font-body text-[11px] tracking-[0.2em] font-bold text-on-surface-variant uppercase">TAILOR YOUR EXPERIENCE</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {enhancements.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 80}>
                  <div
                    onClick={() => toggleItem({ name: item.name, price: item.price })}
                    className={`cursor-pointer group border-b pb-5 flex justify-between items-center transition-all duration-300 ${
                      isSelected(item.name) ? 'border-secondary' : 'border-primary/10 hover:border-secondary/40'
                    }`}
                  >
                    <div>
                      <h4 className={`font-display text-xl transition-colors duration-300 ${isSelected(item.name) ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                        {item.name}
                      </h4>
                      <p className="text-sm text-on-surface-variant font-body">{item.desc}</p>
                      <button className="font-body text-[10px] tracking-widest font-bold text-secondary mt-2 uppercase transition-opacity">
                        {isSelected(item.name) ? '✓ Added' : 'Add to Experience'}
                      </button>
                    </div>
                    <span className="text-xl font-display text-primary">₹{item.price.toLocaleString()}</span>
                  </div>
                </ScrollReveal>
              ))}

              {/* Consultation - Included */}
              <ScrollReveal delay={enhancements.length * 80}>
                <div className="group border-b border-primary/10 pb-5 flex justify-between items-center">
                  <div>
                    <h4 className="font-display text-xl text-primary">Consultation</h4>
                    <p className="text-sm text-on-surface-variant font-body">Event styling session</p>
                  </div>
                  <span className="font-body text-[11px] tracking-[0.15em] font-bold text-secondary uppercase">INCLUDED</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Gourmet Refreshments */}
        <section className="py-20 px-5 md:px-8 max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-[28px] md:text-[32px] text-primary mb-4">Gourmet Refreshments</h2>
            <div className="w-[100px] h-px bg-secondary mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foods.map((food, i) => (
              <ScrollReveal key={food.name} delay={i * 100}>
                <div
                  onClick={() => toggleItem({ name: food.name, price: food.price })}
                  className={`cursor-pointer bg-surface border overflow-hidden group transition-all duration-300 ${
                    isSelected(food.name) ? 'border-secondary shadow-[0_0_30px_rgba(119,90,25,0.1)]' : 'border-primary/5'
                  }`}
                >
                  <div className="h-56 md:h-64 bg-primary/10 overflow-hidden relative">
                    <Image
                      src={food.img}
                      alt={food.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center flex flex-col items-center">
                    <h4 className="font-display text-xl text-primary mb-2">{food.name}</h4>
                    <p className="text-on-surface-variant text-sm mb-3 font-body">{food.desc}</p>
                    <div className="font-body text-sm font-bold text-secondary mb-4">{food.priceLabel}</div>
                    <button className={`px-6 py-2 font-body text-[11px] tracking-widest font-bold uppercase transition-all duration-300 ${isSelected(food.name) ? 'bg-secondary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      {isSelected(food.name) ? '✓ Added' : 'Add to Experience'}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Venue Guidelines */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <ScrollReveal>
              <div className="bg-primary-container p-10 md:p-16 border border-secondary/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="font-display text-2xl md:text-[28px] text-secondary-fixed mb-12 text-center uppercase tracking-widest">
                    Important Venue Guidelines
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { icon: 'cancel', title: 'No Snow Spray', desc: 'To preserve our architectural surfaces and guest attire, snow sprays are strictly prohibited.' },
                      { icon: 'no_food', title: 'Outside Food', desc: 'External catering is not permitted to maintain our stringent hygiene and quality standards.' },
                      { icon: 'celebration', title: 'No Party Poppers', desc: 'Confetti and poppers are restricted to maintain the pristine aesthetic of the House.' },
                    ].map((rule) => (
                      <div key={rule.title} className="text-center group">
                        <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4 block group-hover:scale-110 transition-transform duration-300">{rule.icon}</span>
                        <h5 className="font-display text-xl mb-2">{rule.title}</h5>
                        <p className="text-on-primary-container text-sm font-body">{rule.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center">
                    <p className="font-body text-[11px] tracking-[0.2em] font-bold text-secondary-fixed border border-secondary-fixed/30 inline-block px-6 py-2 uppercase">
                      Maintaining Luxury Standards
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Floating Summary Sidebar */}
      <div
        className={`fixed bottom-6 right-4 md:right-8 z-[60] w-[90vw] max-w-[320px] bg-white border border-primary/10 shadow-2xl transition-all duration-500 ${
          items.length > 0
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="bg-primary text-white p-5 cursor-pointer select-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h3 className="font-display text-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              Your Experience
              <span className="material-symbols-outlined text-secondary-fixed text-xl">auto_awesome</span>
            </div>
            <span className={`material-symbols-outlined transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </h3>
        </div>
        <div className={`transition-all duration-300 overflow-hidden bg-white ${isCollapsed ? 'max-h-0' : 'max-h-[500px]'}`}>
          <div className="p-5">
          <div className="space-y-3 max-h-[200px] overflow-y-auto mb-5 pr-1">
            {items.map((item) => (
              <div key={item.name} className="flex justify-between items-center group">
                <div>
                  <span className="text-sm font-body font-bold text-primary block">{item.name}</span>
                  <span className="text-[10px] text-on-surface-variant font-body">₹{item.price.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => toggleItem(item)}
                  className="text-error opacity-0 group-hover:opacity-100 transition-opacity p-1"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-primary/5 pt-4 mb-5">
            <div className="flex justify-between items-end">
              <span className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase font-bold">ESTIMATED TOTAL</span>
              <span className="font-display text-2xl text-primary">₹{total.toLocaleString()}</span>
            </div>
          </div>
          <Link
            href="/enquire"
            className="block w-full text-center bg-secondary text-white py-3.5 font-body text-[11px] tracking-widest font-bold uppercase hover:bg-primary transition-all duration-300"
          >
            Enquire Now with Selection
          </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
