'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface WishlistContextValue {
  ids: string[]
  isWished: (id: string) => boolean
  toggle: (id: string) => boolean
}

const WishlistContext = createContext<WishlistContextValue | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([])

  const toggle = useCallback((id: string) => {
    let added = false
    setIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id)
      }
      added = true
      return [...prev, id]
    })
    return added
  }, [])

  const value = useMemo<WishlistContextValue>(
    () => ({
      ids,
      isWished: (id: string) => ids.includes(id),
      toggle,
    }),
    [ids, toggle],
  )

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider')
  return ctx
}
