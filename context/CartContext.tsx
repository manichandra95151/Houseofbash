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
  extraGuests: number
  setExtraGuests: (count: number) => void
  extraKids: number
  setExtraKids: (count: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

const BASE_PRICE = 2500

export function CartProvider({ children }: { children: ReactNode }) {
  const [rawItems, setRawItems] = useState<CartItem[]>([])
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(AVAILABLE_SLOTS[1])
  const [extraGuests, setExtraGuests] = useState(0)
  const [extraKids, setExtraKids] = useState(0)

  const getExtraPersonsItem = (): CartItem | null => {
    const price = extraGuests * 350 + extraKids * 150
    if (price === 0) return null

    let name = 'Extra Persons'
    if (extraGuests > 0 && extraKids > 0) {
      name = `Extra Persons (${extraGuests} Guests (Age 5+), ${extraKids} Kids under 5)`
    } else if (extraGuests > 0) {
      name = `Extra Persons (${extraGuests} Guests (Age 5+))`
    } else if (extraKids > 0) {
      name = `Extra Persons (${extraKids} Kids under 5)`
    }

    return { name, price }
  }

  const extraItem = getExtraPersonsItem()
  const items = extraItem ? [extraItem, ...rawItems] : rawItems

  const addItem = (item: CartItem) => {
    if (item.name.startsWith('Extra Persons')) return
    setRawItems((prev) => (prev.some((i) => i.name === item.name) ? prev : [...prev, item]))
  }

  const removeItem = (name: string) => {
    if (name.startsWith('Extra Persons')) {
      setExtraGuests(0)
      setExtraKids(0)
      return
    }
    setRawItems((prev) => prev.filter((i) => i.name !== name))
  }

  const toggleItem = (item: CartItem) => {
    if (item.name.startsWith('Extra Persons')) {
      setExtraGuests(0)
      setExtraKids(0)
      return
    }
    setRawItems((prev) =>
      prev.some((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item]
    )
  }

  const isSelected = (name: string) => {
    if (name === 'Extra Persons') {
      return extraGuests > 0 || extraKids > 0
    }
    return rawItems.some((i) => i.name === name)
  }

  const getBasePrice = (slot: Slot | null) => {
    if (!slot) return BASE_PRICE
    if (slot.time === '08:00 AM – 09:30 AM' || slot.time === '05:00 PM – 06:30 PM') {
      return BASE_PRICE - 700
    }
    return BASE_PRICE
  }

  const basePrice = getBasePrice(selectedSlot)
  const total = basePrice + items.reduce((sum, i) => sum + i.price, 0)

  const clearCart = () => {
    setRawItems([])
    setExtraGuests(0)
    setExtraKids(0)
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, toggleItem, isSelected, total, basePrice, clearCart, selectedSlot, setSelectedSlot, extraGuests, setExtraGuests, extraKids, setExtraKids }}>
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