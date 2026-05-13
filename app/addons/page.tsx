'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { useCart } from '../../context/CartContext'

interface SelectedItem {
  name: string
  price: number
}

const BASE_PRICE = 2500

const enhancements = [
  { name: 'Flower Bouquet', desc: 'Fresh seasonal arrangements', price: 600 },
  { name: 'Vehicle Entry', desc: 'Arrival logistics & access', price: 350 },
  { name: 'Fire Coils', desc: 'Stunning pyrotechnic display (set of 2)', price: 200 },
  { name: 'Single Rose', desc: 'Premium long-stemmed', price: 100 },
  { name: 'Party Props', desc: 'Themed curated accessories', price: 250 },
]

const foods = [
  {
    name: 'Artisanal Pizza',
    desc: 'Hand-stretched dough with premium toppings.',
    price: 2500,
    priceLabel: '₹2,500 (Event Package)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSPim7rnp8tYtcIiXWei0qHAk-yVkkQsWF0mQKQ2AfRZSOKJQdszw9ZsczgSUEbOpx1W8VL76UI6LXcwZBvQoESxfox-jqbbORRu0p0F8Bp3VRhRLd48h0ppXPEGpn3TJSUOzm5efIgbnictdu76Tu9YADOF-Ly7A9C1h_p9j9lvrZWAuok-cCtgtYCfXCiq3Ng7MPmuei-h-HTSejBApPe915qDnO-zr-ocxOEZJglV5BCHSCf_lrXQkdLEnWntCHJNtqxr0i_Kq',
  },
  {
    name: 'House Burger',
    desc: 'Prime cuts on toasted artisanal brioche.',
    price: 350,
    priceLabel: '₹350 (Per Person)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgYSyLmsKjAYkJFf__-56IfCJ4Wr3CnkJjeQ29LzlejPzWqGCR-U-92jRfKXPgUvsbxjC-PSfZ9ssoTgXs2JIJUED6OfMPS4Q7ohGS1_TKaaQZ4BgBzbNdmDGFS_DxgQUdfx0UTbrxwDb1D9D9U7cfat8UFIJrkQnibaQjMmGZ0OC-KgHr3skBxtNaKbsGRKTPoY1VXo-h3enYynW7PY73oLDMpClB5o80srBjQmnfjJCP0Z7dnnv191m_woDgCw8nU89yJ3FITr4',
  },
  {
    name: 'Gourmet Frankie',
    desc: 'Savory wraps with secret spice blend.',
    price: 250,
    priceLabel: '₹250 (Per Unit)',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAicA20t1OXHb3zrQONEKaPOS1AR86HHXl0fRq1cUI8qi3bZuBdjGuYgYSX3TVmeHX_G3pHIRl3xuzAaMwXYV21aRbc9tLT0tSDJSVdAWjF5n-D3dr_aER2gHa2dkOuTEuRW6JK8EpAAIJdNY-huv2mkwMXc02lmkvzx6wI7kVeHA3UyhSYxEDZehx64eoDpDSFVb2RR0sI08VTUR5jAkm-OdHSmx5kKI5kirlVnX8KeP4ib20MSLDTZ7Vx2aaYkevE2wKyXf3GTtxA',
  },
]

export default function AddonsPage() {
  const { items, toggleItem, isSelected, total } = useCart()

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
                    Every House of Bash experience begins here. A perfectly curated baseline for your private event with no compromise on luxury.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {[
                      { icon: 'groups', label: 'Up to 5 Guests', sub: 'Kids policy: Up to 4 kids included free. Additional kids at ₹100 each.' },
                      { icon: 'schedule', label: '3 Hours Theatre Access', sub: '' },
                      { icon: 'auto_awesome', label: 'Full Decoration Included', sub: '' },
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
                  <div className="font-display text-5xl text-white mb-2">₹2,500</div>
                  <span className="text-on-primary-container text-[10px] font-body uppercase tracking-tight">Essential Foundation</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                    Comprehensive visual storytelling by our in-house premium media team, ensuring every architectural detail and emotion is preserved.
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
                    Create a mystical atmosphere for your grand arrival with our heavy-density fog effects.
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
              <div className="border border-primary/5 bg-surface-container-low p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-[28px] text-primary mb-4">Artisanal Cakes</h3>
                  <p className="text-on-surface-variant mb-8 font-body">
                    Bespoke confectionery crafted by master patisseries. Available in select signature flavors.
                  </p>
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    {[
                      { label: '0.5 KG SELECTION', price: 650, name: 'Artisanal Cake (0.5 KG)' },
                      { label: '1.0 KG SELECTION', price: 1000, name: 'Artisanal Cake (1.0 KG)' },
                    ].map((cake) => (
                      <div
                        key={cake.name}
                        onClick={() => toggleItem({ name: cake.name, price: cake.price })}
                        className={`cursor-pointer flex flex-col items-start gap-4 p-4 border transition-all duration-300 ${
                          isSelected(cake.name) ? 'item-selected' : 'border-transparent hover:border-secondary/20'
                        }`}
                      >
                        <div>
                          <span className="font-body text-[11px] tracking-[0.15em] font-bold text-secondary uppercase">{cake.label}</span>
                          <span className="text-2xl font-display text-primary block">₹{cake.price.toLocaleString()}</span>
                        </div>
                        <button
                          className={`px-4 py-2 font-body text-[10px] tracking-widest font-bold uppercase transition-all duration-300 ${
                            isSelected(cake.name) ? 'bg-secondary text-white' : 'bg-primary text-white hover:bg-secondary'
                          }`}
                        >
                          {isSelected(cake.name) ? '✓ Added' : 'Add'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-64 aspect-square overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbvP66k2fPltle9QTchm2QTp4vhVRXkAya__sna7tQ96LCs2sBgJ94U41CDoU5O2qwR2pP8L91zycwMBZ5M2BZtMCa3GWG5u0LMuEAF-GUqPatUfUXVhPC9HQvgi1lhIbKSQJzKgBJnUYqywHZlr9GwPu9pjN2zom0sAJf2_Dl2kFpruTZHnUAseP7RrCrpahSdr2CBUq7F4KLHKbKD8f9gFWUHI9wQFkqBSaCehaWKAXgQVBFex2yKbUctiUnnRyx4qupqVk_mfIG"
                    alt="Artisanal Cake"
                    className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
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
                      <button className="font-body text-[10px] tracking-widest font-bold text-secondary mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <img
                      src={food.img}
                      alt={food.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-primary px-6 py-2 font-body text-[11px] tracking-widest font-bold uppercase">
                        {isSelected(food.name) ? '✓ Added' : 'Add to Experience'}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-display text-xl text-primary mb-2">{food.name}</h4>
                    <p className="text-on-surface-variant text-sm mb-3 font-body">{food.desc}</p>
                    <div className="font-body text-sm font-bold text-secondary">{food.priceLabel}</div>
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
        <div className="bg-primary text-white p-5">
          <h3 className="font-display text-lg flex justify-between items-center">
            Your Experience
            <span className="material-symbols-outlined text-secondary-fixed text-xl">auto_awesome</span>
          </h3>
        </div>
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

      <Footer />
    </>
  )
}
