import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '../context/CartContext'

export const metadata: Metadata = {
  title: 'House of Bash | Private Theatre Celebrations',
  description: "House of Bash — Hyderabad's premier private theatre event space. Book your birthday, anniversary, bride-to-be, or private party in a luxury cinematic setting.",
  keywords: 'private theatre, birthday celebration, anniversary, bride to be, Hyderabad, luxury events, House of Bash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}