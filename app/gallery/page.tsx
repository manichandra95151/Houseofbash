'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

type Category = 'ALL MOMENTS' | 'BIRTHDAYS' | 'ANNIVERSARY' | 'PRIVATE PARTIES' | 'BRIDE TO BE'

interface GalleryItem {
  id: number
  title: string
  subtitle: string
  category: Category
  img: string
  span?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'The Ethereal Pavilion',
    subtitle: 'A minimalist bridal shower overlooking the city skyline at dusk.',
    category: 'BRIDE TO BE',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMj1kVuyAIAE4y3--uxGC7tSRC6ov4unrypRpL5NX7pdGoO4UeqgF3ApqNjkn6yCc3QGa2eo8S17VcHQpp0AoR7LcMwjPaiT2s4FkTenoaxtqGa76hVe2olRkW1T-81TyPOw47MbOq0JEWtPKqI28NfME1TJzIoIrJQ1fpQR80Jh063RG3wNEFJ9MxOXclat8XqIF492JT8e35LkxJJYh7N0MAOPumIU38T0yztxsJsXiQWT4Rgdp3j3LuPOJ6hGw6W_y3E486P34o',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 2,
    title: 'Midnight Soirée',
    subtitle: 'Exclusive champagne service',
    category: 'PRIVATE PARTIES',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdOQykpGZ2IzHKqP5Ck6fWoz7S4bT8tcQACV4k8PmrRu1D9l4KQKcBncl159YLvYu4bHhqo_Tq-Z5Pd79g4IDXtu56rFfKs_yToWTP-_wHae-JGFXwD8KrHKjzddchQSvm0hr7T2XBnyiE9bErPbYHwKMnUFyFbi65dMTqCtkvxgb90UR8iTtrBp_cbK5rKtMHyM2M_eiuojclAvDVDPP8yebMssONl4OwgcaaTIxWSsgml5spMCtxJ4Qkeyxl8h33y1NaAxrDGGie',
    span: '',
  },
  {
    id: 3,
    title: 'Milestone Celebration',
    subtitle: 'A 30th birthday in architectural style.',
    category: 'BIRTHDAYS',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC25EDP1rflx4YGzzIir9fYkuUpsUt6y0cnjx21bVoZgE551F2tSijfPnZP8rXaVVjykmDbdXUEgESfMiYaa4iOR40_cGCLXqkRXw2Wgk_5UwGpFeCodSvPnfbwifnp3H1Rc3dmF-srOaCyq9LfoKgNatuA-LQ15Euiq9QOP6TPB97WWzKXj_7WBBVxovUL_P0m8R35qbRnRi1UYGQGjRu15yqKxlpUJH-42cofXzTbBQsYPyobs53LXZIwtefXuFAdFTqf7Nlcb7vI',
    span: '',
  },
  {
    id: 4,
    title: 'Table of Devotion',
    subtitle: 'Overhead elegance for an anniversary.',
    category: 'ANNIVERSARY',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaaO4VK13QMWKm3VfFrVEEyzTOauWqClvSvdrzmLrQweWcuKZu7AxVgtrTOcrEtZgYybkRwZH1zYgiU3cBIg-HwrZG2DVCy3gFstWQsDPW99bNvMegG8F22MIKysx7r6bMh3Oyi4W_0VOSdSQsiJUI5Z0gJvXFf6cGNbflOUllhxPlBd67PXvUN9buKHsVNCgatJEnBM654alxk8QFjt5ckEr19aN3fy6YSQ0guedf7jEHpOIfdaWldJEr8DMSR4w1mGAB5Xvv7_RO',
    span: '',
  },
  {
    id: 5,
    title: 'The Candle-lit Evening',
    subtitle: 'A private anniversary terrace dinner.',
    category: 'ANNIVERSARY',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfsUFISGWq8iSAKMUoTXBn2irO85LSyfFUxY9pGc6XGHju-MpPbmZ3VFQqGK3j8Ued8wnZqphNx0yGrDoAlcU0sBvAJrhRoNhNuSXve7YGCNOzQKBp7MwKjUZAVqlMwZqZiQZa7UB1138jr0DZgqxXTgCmf7vq5sFYCrL12_02C6PKDSW0bDvusMfpBdiCIg31zxCPyqXS0N6HoWrfAbh6uNMuISl-HtVMGszHWbg9DvekDX6uMGCNBGFsVg-liwZdUk1-nkF5fAd',
    span: 'lg:col-span-2',
  },
  {
    id: 6,
    title: 'Executive Lounge',
    subtitle: 'Corporate exclusivity at its finest.',
    category: 'PRIVATE PARTIES',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOJRWg4hhbJ_oobHKE3Z8REtVV3tZM12jopO4-1SZoBujmYw_yS3D505XSiw2CmB5eI3EQ345C_HJku1VDTVZ7Od_6KX-xKMn0sP0o1hUulgWmhvGA4ffUVVfE5Edjxv46F2Gi5aAwbJ4-81g2Tv1IKdAqhHI1o5mIm8a0Ddg61sLMn0raw_fhRvbHGQxQQSRekGqklNfWbjrkEh9zKx4YPDQVY5fSJSKjViRDUnYwgWusn-MO0lqKWGxtVMdGA4FEw7AhoEVl678m',
    span: '',
  },
  {
    id: 7,
    title: 'Bride to Be',
    subtitle: 'A light-filled bridal shower in bloom.',
    category: 'BRIDE TO BE',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARaR7A1281GHspLF1njnWWfIxWnOUDJ5K0xPgEo4JNKqoeZKuYMje5uVTTO7LqB6ldovSDfFj8IRzXMueFc3sutc6dhcNHvFxtrhu-uI7ZWJv335xd0wCAGLF7tJ1TBWdnRcQDQCIxqrVsCWtG_SsrivTxwhZcS7inYsvhA8BM5t1bJNc5fnRS9Tr0g9UCAjCQyDSwUn7mS7qQKos-m4UcycEAlZg2zAjmo8igPVF2NJG_i-YPlKsWVH53NlCPwtnEgGBfaOxHQ9D1',
    span: '',
  },
]

const categories: Category[] = ['ALL MOMENTS', 'BIRTHDAYS', 'ANNIVERSARY', 'PRIVATE PARTIES', 'BRIDE TO BE']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL MOMENTS')

  const filtered =
    activeCategory === 'ALL MOMENTS'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Header */}
        <header className="py-20 text-center bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-[48px] text-primary mb-4">Experience Gallery</h1>
              <div className="w-[100px] h-px bg-secondary mx-auto mb-8" />
              <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
                A curated visual narrative of our most prestigious celebrations, where architectural precision meets the art of sophisticated joy.
              </p>
            </ScrollReveal>
          </div>
        </header>

        {/* Category Filter */}
        <section className="sticky top-20 bg-surface z-40 border-b border-primary/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-5 overflow-x-auto">
            <div className="flex justify-start md:justify-center gap-8 md:gap-12 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-[11px] tracking-[0.2em] font-bold uppercase transition-all duration-300 pb-1 whitespace-nowrap ${
                    activeCategory === cat
                      ? 'text-secondary border-b border-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
              {filtered.map((item, i) => (
                <ScrollReveal
                  key={item.id}
                  delay={i * 80}
                  className={item.span || ''}
                >
                  <div className="relative overflow-hidden group h-full bg-primary-container cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <span className="font-body text-[10px] tracking-widest font-bold text-secondary-fixed mb-2 uppercase">
                        {item.category}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl text-white mb-1">{item.title}</h3>
                      <p className="text-on-primary-container font-body text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-body text-on-surface-variant">No moments in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stories in Motion */}
        <section className="py-20 bg-primary text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center mb-16">
            <ScrollReveal>
              <span className="font-body text-[11px] tracking-[0.3em] font-bold text-secondary-fixed mb-4 block uppercase">CINEMATIC ARCHIVE</span>
              <h2 className="font-display text-4xl md:text-[48px] mb-4">Stories in Motion</h2>
              <div className="w-16 h-px bg-secondary mx-auto" />
            </ScrollReveal>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <ScrollReveal>
              <div className="relative aspect-video max-w-5xl mx-auto bg-primary-container overflow-hidden rounded-lg group shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiUEyxQAmfbZot7fKRXJNR00hjcl_5YlzFvtGrhZ4bLvpNcSxZuW0Sd2cuof8UYY0XHem8UuwBd0PHrsiKzePzPYMT14EymdCPR6d0ei_BD7GFbeTDw9frhXA9Q5hhbLBYR-i59rVQ9TDoX7GlrWr_y0p_4fe_AZ4jJo7gQsn_s6uvozCmatI2tAKsp4azf5lv2yvH1YOyuk-nkRWFTdf3mHIWzh3Sf2zR5H2ac38ZsQUWfVv0LaM3PDbYEdZHSbIKwk2FMyUjS0WG"
                  alt="Cinematic archive"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full border border-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500">
                    <span
                      className="material-symbols-outlined text-secondary text-5xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <p className="font-body text-[10px] tracking-widest font-bold text-on-primary-container uppercase">NOW PLAYING</p>
                    <p className="font-display text-xl">A Decade of Celebrations</p>
                  </div>
                  <span className="font-body text-[11px] tracking-widest border border-on-primary-container/30 px-3 py-1">02:45</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Collection Highlights */}
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  category: 'Anniversary',
                  desc: 'Honoring legacies of love with intimate, bespoke experiences that reflect the unique journey of each couple.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfsUFISGWq8iSAKMUoTXBn2irO85LSyfFUxY9pGc6XGHju-MpPbmZ3VFQqGK3j8Ued8wnZqphNx0yGrDoAlcU0sBvAJrhRoNhNuSXve7YGCNOzQKBp7MwKjUZAVqlMwZqZiQZa7UB1138jr0DZgqxXTgCmf7vq5sFYCrL12_02C6PKDSW0bDvusMfpBdiCIg31zxCPyqXS0N6HoWrfAbh6uNMuISl-HtVMGszHWbg9DvekDX6uMGCNBGFsVg-liwZdUk1-nkF5fAd',
                  offset: '',
                },
                {
                  category: 'Private Parties',
                  desc: 'Curated gatherings for the discerning few, where every detail is an architectural statement of hospitality.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOJRWg4hhbJ_oobHKE3Z8REtVV3tZM12jopO4-1SZoBujmYw_yS3D505XSiw2CmB5eI3EQ345C_HJku1VDTVZ7Od_6KX-xKMn0sP0o1hUulgWmhvGA4ffUVVfE5Edjxv46F2Gi5aAwbJ4-81g2Tv1IKdAqhHI1o5mIm8a0Ddg61sLMn0raw_fhRvbHGQxQQSRekGqklNfWbjrkEh9zKx4YPDQVY5fSJSKjViRDUnYwgWusn-MO0lqKWGxtVMdGA4FEw7AhoEVl678m',
                  offset: 'md:mt-16',
                },
                {
                  category: 'Bride to be',
                  desc: 'Sophisticated celebrations for the journey to the altar, prioritizing elegance and timeless feminine charm.',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARaR7A1281GHspLF1njnWWfIxWnOUDJ5K0xPgEo4JNKqoeZKuYMje5uVTTO7LqB6ldovSDfFj8IRzXMueFc3sutc6dhcNHvFxtrhu-uI7ZWJv335xd0wCAGLF7tJ1TBWdnRcQDQCIxqrVsCWtG_SsrivTxwhZcS7inYsvhA8BM5t1bJNc5fnRS9Tr0g9UCAjCQyDSwUn7mS7qQKos-m4UcycEAlZg2zAjmo8igPVF2NJG_i-YPlKsWVH53NlCPwtnEgGBfaOxHQ9D1',
                  offset: '',
                },
              ].map((col, i) => (
                <ScrollReveal key={col.category} delay={i * 120} className={col.offset}>
                  <div className="space-y-5">
                    <div className="aspect-[4/5] bg-surface-container overflow-hidden border border-primary/5">
                      <img
                        src={col.img}
                        alt={col.category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="font-display text-xl text-primary">{col.category}</h3>
                    <p className="text-on-surface-variant font-body text-base">{col.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface-container-high">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-[28px] md:text-[32px] text-primary mb-5">Begin Your Story</h2>
              <p className="text-on-surface-variant font-body text-lg mb-10">
                We invite you to experience the House of Bash difference. Let us transform your vision into an architectural reality of celebration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link
                  href="/enquire"
                  className="bg-primary text-white px-10 py-4 font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-all duration-300 inline-block"
                >
                  ENQUIRE NOW
                </Link>
                <Link
                  href="/addons"
                  className="border border-primary text-primary px-10 py-4 font-body text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-primary hover:text-white transition-all duration-300 inline-block"
                >
                  VIEW SERVICES
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
