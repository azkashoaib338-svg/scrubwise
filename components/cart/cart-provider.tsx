'use client'

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import type { CartItem, Product } from '@/lib/types'

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; product: Product; size: string; quantity: number }
  | { type: 'REMOVE'; productId: string; size: string }
  | { type: 'UPDATE_QTY'; productId: string; size: string; quantity: number }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const { product, size, quantity } = action
      const existing = state.items.find(
        (i) => i.productId === product.id && i.size === size,
      )
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === product.id && i.size === size
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            image: product.image,
            price: product.price,
            size,
            quantity,
          },
        ],
      }
    }
    case 'REMOVE':
      return {
        items: state.items.filter(
          (i) => !(i.productId === action.productId && i.size === action.size),
        ),
      }
    case 'UPDATE_QTY':
      return {
        items: state.items
          .map((i) =>
            i.productId === action.productId && i.size === action.size
              ? { ...i, quantity: Math.max(1, action.quantity) }
              : i,
          )
          .filter((i) => i.quantity > 0),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (product: Product, size?: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0,
    )
    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem: (product, size, quantity = 1) =>
        dispatch({
          type: 'ADD',
          product,
          size: size ?? product.size,
          quantity,
        }),
      removeItem: (productId, size) =>
        dispatch({ type: 'REMOVE', productId, size }),
      updateQuantity: (productId, size, quantity) =>
        dispatch({ type: 'UPDATE_QTY', productId, size, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
