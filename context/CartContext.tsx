'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  name: string
  price: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (name: string) => void
  toggleItem: (item: CartItem) => void
  isSelected: (name: string) => boolean
  total: number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const BASE_PRICE = 2500

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
 

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

  const total = BASE_PRICE + items.reduce((sum, i) => sum + i.price, 0)

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, toggleItem, isSelected, total, clearCart }}>
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