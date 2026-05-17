'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  name: string
  price: number
}

export type Slot = {
  name: string
  time: string
}

export const AVAILABLE_SLOTS: Slot[] = [
  { name: 'MORNING', time: '08:00 AM – 09:30 AM' },
  { name: 'BRUNCH', time: '10:00 AM – 01:00 PM' },
  { name: 'AFTERNOON', time: '01:30 PM – 04:30 PM' },
  { name: 'SUNDOWNER', time: '05:00 PM – 06:30 PM' },
  { name: 'EVENING', time: '07:00 PM – 10:00 PM' },
  { name: 'NIGHT', time: '11:00 PM – 02:00 AM' },
]

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (name: string) => void
  toggleItem: (item: CartItem) => void
  isSelected: (name: string) => boolean
  total: number
  basePrice: number
  clearCart: () => void
  selectedSlot: Slot | null
  setSelectedSlot: (slot: Slot) => void
}

const CartContext = createContext<CartContextType | null>(null)

const BASE_PRICE = 2500

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(AVAILABLE_SLOTS[1])
 

  const addItem = (item: CartItem) => {
    setItems((prev) => (prev.some((i) => i.name === item.name) ? prev : [...prev, item]))
  }

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name))
  }

  const toggleItem = (item: CartItem) => {
    setItems((prev) =>
      prev.some((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item]
    )
  }

  const isSelected = (name: string) => items.some((i) => i.name === name)

  const getBasePrice = (slot: Slot | null) => {
    if (!slot) return BASE_PRICE
    if (slot.time === '08:00 AM – 09:30 AM' || slot.time === '05:00 PM – 06:30 PM') {
      return BASE_PRICE - 800
    }
    return BASE_PRICE
  }

  const basePrice = getBasePrice(selectedSlot)
  const total = basePrice + items.reduce((sum, i) => sum + i.price, 0)

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, toggleItem, isSelected, total, basePrice, clearCart, selectedSlot, setSelectedSlot }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export const BASE_PACKAGE_PRICE = BASE_PRICE