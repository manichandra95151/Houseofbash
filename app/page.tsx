'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const features = [
  { icon: 'tv', label: '150 INCH SCREEN' },
  { icon: '4k', label: '4K RESOLUTION' },
  { icon: 'surround_sound', label: 'DOLBY ATMOS' },
  { icon: 'flare', label: 'DISCO LIGHTING' },
  { icon: 'restaurant', label: 'DINING EXPERIENCE' },
  { icon: 'skillet', label: 'IN-HOUSE FOOD' },
]

const occasions = [
  {
    title: 'Birthdays',
    desc: 'Your special day, screened in cinematic glory. We set the scene — you bring the squad.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5IKphbsRWS2ISbnl1Vk5CrXS7EdRFMtDWERcCQAbSDL2DpVZ_qa_hYMGgsrj3L1bUmipQK5O8wlfz9Zbe9v9Edl3IbVgIdnRqLLqisbDTgOzBFBx67vNmDRU_6nKLDXJLBz8WLY3fmAvzD3XuiO808JFVgjYjDVxvZ-_pnH_qk_szZJbO9CbFpWWQduGSqLaJZgJMBOGwXy9hXktUfm2CFYqnMez4AeR8Cf2n0CPpTtFNSsS22SNn2cUZUt4sYHBWmacBTH1ieKFy',
  },
  {
    title: 'Anniversary',
    desc: 'Relive your love story on the big screen. A private moment crafted just for the two of you.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8GXOCPFNdKL-TkEb3SS-uASmmr_II8ZgJ3ByBxbOa_dr_cDsxICpjOd6_uLLKlBsMZaj04t3zrGjntkIU5NFhd3P-9_E7k5WedoNr3iIdi9S8XFiXNJ70Jcvg2E9SRL5SE_l-jCnEX0eLgGUDdyGcRGDrNAYC0AfMLuGyHaasGxhNmqGj0Pb98EdProqSxjJe0zcGhAMmrGL_04sI42R1klzg26G4Cxm45MH_zGUhfhmm9OlBnm2IfmFR-SdCPlDBUdnnueO58xc2',
  },
  {
    title: 'Private Parties',
    desc: 'Your crew, your playlist, your rules — in a fully decked-out private theatre all to yourself.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLpx5FbvDKFWDDdU7g-lR9igqsvAmikq6rYjrk8QlxZJpFVnhZ8RGhIl8TAl2mRbKPLl9mMkOg38WpA0JZYVFpZOqAd6Z5pcfEiOPbv6bU-oljvrE2R9q7Y1Q7w9QWhEjd0uD1RPuOqTjA4w384IcBixZTp5_syULo5mzw2eBIPvIDLoRxQ_U5vBqu9rii_4GieopBc1BUikt_nWLmy1o3J6CxRGfRcMTSuDckKlODJArahzEY80nYJ6bfx5ugBhBAAWWTB_RDEyYI',
  },
  {
    title: 'Bride to Be',
    desc: "Pop the champagne, dim the lights — she's getting married and the theatre's all hers.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkyqxaBorhJ6C6cIQpwUDrOpypf5fTNsxG7qZ1RCiBYcgxSoIb9Umw5A728eLlv3ngNJa2mmE1u2h_cl_tO0pxnwqQ_p_FoXGzvPMBpNtAJi4HSbhGDTWsWekZu89ZAP2l6CbRvCg_eIy2YvulA3cU8IUZd_UzIN_N4DzRb2hjffhwxpWXmk5894fDev4Ss81i7H2MmMixjs822FU-eMAkSnyu-ImPy-L_dOUZq1R5EBBxvU5pCx38LqpIkU4heGLTXzIomGu-LjcQ',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Curate Your Experience',
    desc: 'Browse our curated menu and select your preferred enhancements, gourmet food, and photography from the Add-ons page.',
  },
  {
    num: '02',
    title: 'Submit Your Enquiry',
    desc: 'Share your preferred date, guest count, and vision with us. Your selected add-ons are automatically attached to your request.',
  },
  {
    num: '03',
    title: 'Quick Confirmation',
    desc: 'Our team reviews your details and reaches out within 24 hours to finalize your booking and lock in your celebration.',
  },
]

const testimonials = [
  {
    quote: "Booked for my husband's birthday surprise — he had absolutely no idea and was completely blown away. Every little detail was perfect!",
    name: 'Priya R.',
    role: 'BIRTHDAY CELEBRATION',
  },
  {
    quote: 'We celebrated our 5th anniversary here. The decoration was beautiful, the screen quality was stunning, and the food was delicious.',
    name: 'Rahul & Divya',
    role: 'ANNIVERSARY',
  },
  {
    quote: "Organised a bachelorette for my bestie and it was the most fun we've had. Easy booking, amazing setup, zero stress. 10/10!",
    name: 'Sneha M.',
    role: 'BRIDE TO BE',
  },
]

const stats = [
  { value: '500+', label: 'Happy Celebrations' },
  { value: '150"', label: 'Cinema Screen' },
  { value: '4K', label: 'Ultra HD Display' },
  { value: '3 Hrs', label: 'Exclusive Access' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const img = heroRef.current.querySelector('.hero-img') as HTMLElement
        if (img) {
          img.style.transform = `translateY(${scrollY * 0.25}px)`
        }
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[600px] max-h-[960px] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBwkWKHjfAlMLXRDBfj8s8XnrSYPQ_MP-ipm5OD1jsO_VedR4eJ13Z-yWm-Orv47-gHrihJiw7XwzK_M2UGt0VtCbxgVG6ZJ9SQ2HDSZDTBP6UnuA1oObTpVqDcS4juSGPFw6BSS_waSlblTimzm-D5d42k1VmMhFGBeNpwoJNcUBiUgb1hHDyzHSipTZ1cTWRvfxTD5NS6tOqQEBwnF-26pPLmAifzfdLklrDBNLA5o8_kT0eM829ASkzfVEwlN72oNdi1g5Y33m"
              alt="Private theatre celebration"
              className="hero-img w-full h-[130%] object-cover object-center -top-[15%] absolute"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 w-full">
            <div className="max-w-2xl">
              <span className="font-body text-[11px] tracking-[0.35em] font-bold text-secondary-fixed mb-5 block opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
                {"SANGAREDDY'S FINEST PRIVATE THEATRE"}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[58px] leading-[1.08] tracking-tight text-white mb-7 opacity-0 animate-[fadeUp_0.9s_ease_0.4s_forwards]">
                Host Your <br />
                <em className="not-italic text-secondary-fixed">Blockbuster Celebration</em>
              </h1>
              <p className="font-body text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-lg opacity-0 animate-[fadeUp_0.9s_ease_0.6s_forwards]">
                Birthdays, anniversaries, proposals, bachelorettes, we transform any occasion into a blockbuster experience. Full decoration included, starting at just ₹2,500.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 opacity-0 animate-[fadeUp_0.9s_ease_0.8s_forwards]">
                <Link
                  href="/enquire"
                  className="bg-white text-primary px-10 py-4 rounded-sm font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-secondary hover:text-white transition-all duration-500 shadow-sm"
                >
                  BOOK YOUR SLOT
                </Link>
                <Link
                  href="/addons"
                  className="text-white font-body text-[11px] tracking-[0.15em] font-bold uppercase border-b border-white/30 pb-1 hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  EXPLORE ADD-ONS
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards]">
            <span className="font-body text-[10px] tracking-[0.2em] text-white/50 uppercase">Scroll</span>
            <div className="w-px h-12 bg-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-secondary-fixed animate-[float_2s_ease-in-out_infinite]" style={{ height: '40%' }} />
            </div>
          </div> */}
        </section>

        {/* ── STATS BAR ── */}
        {/* <section className="bg-secondary py-10">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="text-center">
                    <div className="font-display text-3xl md:text-4xl text-white mb-1">{stat.value}</div>
                    <div className="font-body text-[10px] tracking-[0.2em] text-white/70 uppercase font-bold">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── FEATURE BAR ── */}
        <section className="bg-primary py-14 md:py-16">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
              {features.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 80}>
                  <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                    <span
                      className="material-symbols-outlined text-secondary-fixed-dim text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:text-secondary-fixed"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    >
                      {f.icon}
                    </span>
                    <span className="font-body text-[9px] md:text-[10px] tracking-widest text-white/70 group-hover:text-white transition-colors">
                      {f.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVERY OCCASION ── */}
        <section className="py-20 md:py-[80px] bg-surface">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <h2 className="font-display text-3xl md:text-[36px] text-primary mb-4">Every Occasion, On the Big Screen</h2>
              <div className="h-px w-[100px] bg-secondary mx-auto mb-6" />
              <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto">
                Whatever you&apos;re celebrating, we&apos;ve got the perfect setup. Fully decorated, fully private, fully awesome.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occ, i) => (
                <ScrollReveal key={occ.title} delay={i * 100}>
                  <div className="group cursor-pointer overflow-hidden rounded-sm border border-primary/8 bg-white p-6 md:p-7 text-center hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(9,20,38,0.08)]">
                    <div className="mb-5 overflow-hidden rounded-sm">
                      <Image
                        src={occ.img}
                        alt={occ.title}
                        className="w-full h-48 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        width={400}
                        height={192}
                      />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-primary mb-2">{occ.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant mb-5 leading-relaxed">{occ.desc}</p>
                    <span className="font-body text-[10px] text-secondary tracking-widest font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      EXPLORE →
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-14 text-center" delay={200}>
              <Link
                href="/gallery"
                className="inline-block bg-primary text-white px-12 py-4 rounded-sm font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-all duration-500 shadow-sm"
              >
                SEE IT IN ACTION
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="bg-secondary py-4 overflow-hidden">
          <div className="marquee-track flex gap-8 whitespace-nowrap">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="font-body text-[11px] tracking-[0.25em] font-bold text-white/80 uppercase flex items-center gap-8">
                Private Theatre Sangareddy
                <span className="text-white/40">◆</span>
                Birthday Celebrations
                <span className="text-white/40">◆</span>
                Anniversaries
                <span className="text-white/40">◆</span>
                Bride to Be Parties
                <span className="text-white/40">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS — light bg so navbar stays visible ── */}
        <section className="py-20 md:py-[80px] bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-20 items-center">

              <div className="lg:w-1/2 w-full">
                <ScrollReveal direction="left">
                  <span className="font-body text-[11px] tracking-[0.3em] font-bold text-secondary mb-4 block uppercase">
                    HOW IT WORKS
                  </span>
                  <h2 className="font-display text-3xl md:text-[36px] text-primary mb-10">
                    Secure Your Celebration in 3 Simple Steps
                  </h2>
                </ScrollReveal>

                <div className="space-y-10">
                  {processSteps.map((step, i) => (
                    <ScrollReveal key={step.num} delay={i * 150} direction="left">
                      <div className="flex gap-6 group">
                        <span className="font-display text-3xl text-secondary opacity-30 group-hover:opacity-100 transition-opacity duration-300 min-w-[3.5rem] leading-none pt-1">
                          {step.num}
                        </span>
                        <div className="border-l border-primary/10 group-hover:border-secondary pl-6 transition-colors duration-300">
                          <h4 className="font-display text-xl text-primary mb-2">{step.title}</h4>
                          <p className="font-body text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal delay={500} direction="left">
                  <div className="mt-12">
                    <Link
                      href="/enquire"
                      className="inline-block bg-primary text-white px-10 py-4 font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-all duration-500"
                    >
                      BOOK YOUR CELEBRATION
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:w-1/2 relative w-full">
                <ScrollReveal direction="right">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb6ztVcAMVQ7gVzZD-RLjooFc63QK4tCDfwQsV4YJx88eDkE_h6QwDGZ6WuafdT6efl-BzZEys3mCO2-f9T0sVk_MBqUb49BjFOLMRn1CpbZN_LDpeuBABPAKWTKGe5nyMskzvN1THWF-YlrRQIT4We-QQuH3JPzCKXeSm3XevSmWWAfJf5Q-MFkAkGweIWXNmSw7HR98r9cEatvrWBZyNtGjdDfxPv_I_WROu52A4sDB3FU-kb5SMz2sn51FwfzzqD8NSaQVVIAh7"
                      alt="Theatre event setup"
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-4 bg-secondary p-7 md:p-10 hidden lg:block shadow-xl">
                    <p className="font-display text-xl text-white leading-tight">
                      Walk in ready.<br />We handle the rest.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 md:py-[80px] bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-[32px] text-primary">What Our Guests Say</h2>
              <div className="h-px w-[100px] bg-secondary mx-auto mt-4" />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 150}>
                  <div className="bg-surface-container-low p-8 relative group hover:shadow-md transition-shadow duration-300">
                    <div className="font-display text-6xl text-secondary/20 leading-none absolute top-4 left-6 select-none">&ldquo;</div>
                    <p className="font-body text-base text-on-surface-variant mb-6 leading-relaxed pt-6 relative z-10">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-secondary" />
                      <div>
                        <h5 className="font-body text-[12px] tracking-[0.1em] font-bold text-primary uppercase">{t.name}</h5>
                        <p className="text-[10px] text-secondary tracking-widest font-body font-bold uppercase mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-[80px] bg-primary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
            <span className="font-display text-[18vw] leading-none text-white whitespace-nowrap">BASH</span>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10 text-center">
            <ScrollReveal>
              <span className="font-body text-[11px] tracking-[0.3em] font-bold text-secondary-fixed mb-4 block uppercase">
                Ready to Party?
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                Your Private Theatre Awaits
              </h2>
              <p className="font-body text-base md:text-lg text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
                Starting at just ₹2,500. Full decoration included. Enquire now and our team gets back within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link
                  href="/enquire"
                  className="bg-secondary-fixed text-on-secondary-fixed px-12 py-5 rounded-sm font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white transition-all duration-500 inline-block"
                >
                  ENQUIRE NOW
                </Link>
                <Link
                  href="/addons"
                  className="border border-white/30 text-white px-12 py-5 rounded-sm font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:border-secondary-fixed hover:text-secondary-fixed transition-all duration-300 inline-block"
                >
                  VIEW PRICING
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}