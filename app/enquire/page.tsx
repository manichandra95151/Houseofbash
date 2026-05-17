'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { useCart, AVAILABLE_SLOTS } from '../../context/CartContext'

interface FormData {
  fullName: string
  email: string
  phone: string
  eventType: string
  guests: string
  eventDate: string
  vision: string
}

export default function EnquirePage() {
  const { items, total, clearCart, toggleItem, basePrice, selectedSlot, setSelectedSlot } = useCart()

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Birthday Celebration',
    guests: '',
    eventDate: '',
    vision: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cartItems: items,
          total,
          basePrice,
          selectedSlot: selectedSlot?.time || '',
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      clearCart()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const faqs = [
    {
      q: 'What is the lead time for booking?',
      a: 'We recommend enquiring at least 3–5 days before your date. For peak weekends, book earlier. We do accommodate last-minute requests when slots are available.',
    },
    {
      q: 'How long is each session?',
      a: 'It depends on the slot you select. We offer both 3-hour and 1.5-hour exclusive private theatre slots.',
    },
    {
      q: 'Is there a minimum guest count?',
      a: 'No minimum! Our base package covers up to 5 guests. Extra guests will be charged: kids under 5 years are ₹100 per kid, and others are ₹350 per person.',
    },
    {
      q: 'How does payment work?',
      a: 'Once we confirm your slot, an advance booking amount of ₹1000 is required to secure the date. The remaining balance can be settled on the day of your event.',
    },
    {
      q: 'What is your refund policy?',
      a: 'We offer a full refund of your booking amount if you cancel at least 48 hours before your scheduled event.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">

        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 text-center mb-16">
          <ScrollReveal>
            <span className="font-body text-[11px] tracking-[0.3em] font-bold text-secondary mb-4 block uppercase">
              Let&apos;s Get the Party Started
            </span>
            <h1 className="font-display text-4xl md:text-[56px] lg:text-[64px] text-primary mb-6">Begin Your Journey</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Fill in your details below and our team will reach out within 24 hours to lock in your celebration. It&apos;s that easy.
            </p>
            <div className="w-[100px] h-px bg-secondary mx-auto mt-8" />
          </ScrollReveal>
        </section>

        {/* Content Grid */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-7 h-full">
              <ScrollReveal direction="left" className="h-full">
                <div className="bg-white p-8 md:p-12 border border-primary/5 h-full flex flex-col">
                  {submitted ? (
                    <div className="text-center py-16">
                      <span className="material-symbols-outlined text-secondary text-6xl mb-6 block">check_circle</span>
                      <h3 className="font-display text-3xl text-primary mb-4">Enquiry Received!</h3>
                      <p className="font-body text-on-surface-variant mb-2 text-base leading-relaxed">
                        Thank you! We&apos;ve sent a confirmation to your email.
                      </p>
                      <p className="font-body text-on-surface-variant mb-10 text-base">
                        Our team will call or WhatsApp you within <strong>24 hours</strong> to confirm your booking.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                          href="/"
                          className="inline-block bg-primary text-white px-10 py-4 font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-all duration-300"
                        >
                          BACK TO HOME
                        </Link>
                        <Link
                          href="/gallery"
                          className="inline-block border border-primary text-primary px-10 py-4 font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          VIEW GALLERY
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10">

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Arjun Sharma"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="form-field"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="arjun@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-field"
                          />
                        </div>
                      </div>

                      {/* Phone & Event Type */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Phone / WhatsApp</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="form-field"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Event Type</label>
                          <select
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="form-field appearance-none bg-transparent cursor-pointer"
                          >
                            <option>Birthday Celebration</option>
                            <option>Anniversary</option>
                            <option>Bride to Be</option>
                            <option>Private Party</option>
                            <option>Proposal</option>
                            <option>Baby Shower</option>
                            <option>Corporate Event</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Guests & Date */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Number of Guests</label>
                          <input
                            type="number"
                            placeholder="e.g. 5"
                            min="1"
                            max="30"
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="form-field"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Preferred Date</label>
                          <input
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                            className="form-field"
                          />
                        </div>
                      </div>

                      {/* Cart Summary — from CartContext */}
                      <div className="p-6 bg-surface-container-low border border-secondary/20">
                        <h4 className="font-body text-[11px] tracking-[0.15em] font-bold text-secondary mb-4 flex items-center gap-2 uppercase">
                          <span className="material-symbols-outlined text-[18px]">verified</span>
                          Your Selection Summary
                        </h4>

                        {items.length === 0 ? (
                          <div className="mb-4">
                            <p className="font-body text-sm text-on-surface-variant italic mb-2">
                              No add-ons selected yet. You can choose them from the{' '}
                              <Link href="/addons" className="text-secondary underline hover:no-underline">
                                Add-ons page
                              </Link>
                              .
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-3 mb-4">
                            {items.map((item) => (
                              <div key={item.name} className="flex justify-between items-center font-body text-sm group">
                                <span className="text-on-surface-variant flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => toggleItem(item)}
                                    className="text-error opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
                                    title="Remove"
                                  >
                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                  </button>
                                  {item.name}
                                </span>
                                <span className="font-bold text-primary">₹{item.price.toLocaleString()}</span>
                              </div>
                            ))}
                            {selectedSlot && (
                              <div className="flex justify-between items-center font-body text-sm mt-4 pt-4 border-t border-secondary/10">
                                <span className="text-on-surface-variant">Selected Slot</span>
                                <span className="font-bold text-primary">{selectedSlot.time}</span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="border-t border-secondary/10 pt-4 flex justify-between items-center">
                          <div>
                            <span className="font-body text-[11px] tracking-widest font-bold text-primary uppercase">Estimated Total</span>
                            <p className="font-body text-[9px] text-on-surface-variant mt-0.5">Incl. ₹{basePrice.toLocaleString()} base package</p>
                          </div>
                          <span className="font-display text-2xl text-secondary">₹{total.toLocaleString()}</span>
                        </div>
                        <p className="text-[10px] text-on-surface-variant mt-3 uppercase tracking-widest opacity-60 font-body mb-6">
                          Final pricing confirmed after our team reviews your requirements
                        </p>

                        <div className="border-t border-secondary/10 pt-6">
                          <h4 className="font-body text-[11px] tracking-[0.15em] font-bold text-secondary mb-4 flex items-center gap-2 uppercase">
                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                            Change Slot
                          </h4>
                          <span className="font-body text-[9px] tracking-widest font-bold text-primary opacity-50 mb-3 block uppercase">Available Slots</span>
                          <div className="space-y-1">
                            {AVAILABLE_SLOTS.map((slot) => {
                              const isDiscounted = slot.time === '08:00 AM – 09:30 AM' || slot.time === '05:00 PM – 06:30 PM'
                              return (
                                <button
                                  key={slot.name}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot)}
                                  className={`w-full text-left px-4 py-3 font-body text-sm transition-colors flex justify-between items-center ${
                                    selectedSlot?.name === slot.name
                                      ? 'bg-secondary/10 border-l-2 border-secondary text-primary font-bold'
                                      : 'text-on-surface-variant hover:bg-white hover:text-primary border-l-2 border-transparent'
                                  }`}
                                >
                                  <span>{slot.time}</span>
                                  <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 uppercase rounded-sm border ${
                                    isDiscounted 
                                      ? 'bg-primary/5 text-primary border-primary/10' 
                                      : 'bg-transparent text-on-surface-variant border-secondary/10 opacity-70'
                                  }`}>
                                    {isDiscounted ? '1.5 HR' : '3 HR'}
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {items.length === 0 && (
                          <Link
                            href="/addons"
                            className="mt-4 inline-block border border-secondary/40 text-secondary px-4 py-2 font-body text-[10px] tracking-widest font-bold uppercase hover:bg-secondary hover:text-white transition-all duration-300"
                          >
                            Browse Add-ons →
                          </Link>
                        )}
                      </div>

                      {/* Vision */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-[11px] tracking-[0.15em] font-bold text-primary uppercase">Tell Us About Your Vision</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about the occasion, any themes you have in mind, surprises planned, or anything special we should know..."
                          value={formData.vision}
                          onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                          className="form-field resize-none"
                        />
                      </div>

                      {/* Error */}
                      {error && (
                        <div className="bg-error-container border border-error/20 p-4">
                          <p className="font-body text-sm text-error">{error}</p>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-5 font-body text-[11px] tracking-[0.25em] font-bold uppercase hover:bg-secondary transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            SENDING YOUR ENQUIRY...
                          </>
                        ) : (
                          'SUBMIT ENQUIRY'
                        )}
                      </button>

                      <p className="font-body text-[11px] text-on-surface-variant text-center leading-relaxed">
                        We respond within 24 hours · 100% refund on cancellations 48hrs prior
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 h-full">
              <ScrollReveal direction="right" className="h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5] border border-primary/5 group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNQ5HsfeJVy6raHFyOtmT01PIP63Q_fIup9eTn61n-_DEUWFaxJQgT-9bUOYw3VKe8XagpWMjdHa6x_pmclnaZlegPQk-OqSjSEPGFxLIi-hNcI3zJ911mK1EIZPRw-dNPdzz6ODcmZDMKyHGHYTcVOce4xqI9lIXE6_vmzEto5kmnvzO8zIeZkXbMXy0pEwT_e3fwrlRl3xAZphe-sDbNHp-dRqpiRptv92oo6GdYk3AyzlEEUj25QWMewcutq13qlBeSVWKONAQ6"
                    alt="Luxury event decor"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex flex-col justify-end p-8 text-white">
                    <h3 className="font-display text-2xl mb-2">Quick Turnaround</h3>
                    <p className="font-body text-sm opacity-90">
                      Our team confirms bookings within 24 hours, sometimes faster
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white p-8 md:p-10 border border-primary/5 mt-8 mb-8">
                  <h4 className="font-body text-[11px] tracking-[0.2em] font-bold text-secondary uppercase mb-8">Reach Us Directly</h4>
                  <div className="space-y-6">
                    {[
                      { icon: 'call', text: '+91 9959638833', href: 'tel:+919959638833' },
                      { icon: 'chat', text: 'WhatsApp Us', href: 'https://wa.me/919959638833' },
                      { icon: 'mail', text: 'houseofbash58@gmail.com', href: 'mailto:houseofbash58@gmail.com' },
                      { icon: 'location_on', text: 'Vidyanagar, Sangareddy, Telangana', href: 'https://maps.app.goo.gl/qnHe8xDXcGrXzF2j8' },
                      { icon: 'schedule', text: '6 AM – 3 AM, 365 Days', href: '#' },
                    ].map((contact) => (
                      <a
                        key={contact.icon}
                        href={contact.href}
                        className="flex items-center gap-5 group hover:opacity-80 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform duration-300">{contact.icon}</span>
                        <span className="font-body text-base text-primary">{contact.text}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="flex gap-4">
                  <Link
                    href="/addons"
                    className="flex-1 text-center border border-primary/20 py-3 font-body text-[10px] tracking-widest font-bold uppercase text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    VIEW ADD-ONS
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex-1 text-center border border-primary/20 py-3 font-body text-[10px] tracking-widest font-bold uppercase text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    VIEW GALLERY
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 mt-20">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-[28px] md:text-[32px] text-primary">Quick Answers</h2>
            <div className="w-[100px] h-px bg-secondary mx-auto mt-5" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border-b border-primary/10 pb-6">
                  <h5 className="font-body text-base font-bold text-primary mb-2">{faq.q}</h5>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}