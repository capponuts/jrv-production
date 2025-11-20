'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      type LenisInstance = { destroy?: () => void }
      const maybeLenis = lenis as unknown as LenisInstance
      if (typeof maybeLenis.destroy === 'function') maybeLenis.destroy()
    }
  }, [])

  return null
}

