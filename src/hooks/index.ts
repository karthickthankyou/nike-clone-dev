import { RefObject, useEffect, useRef, useState } from 'react'

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const useScroll = (): [
  [number, number],
  RefObject<HTMLDivElement>,
  () => void,
  (distance: number) => void
] => {
  const [scrollPos, setScrollPos] = useState<[number, number]>([0, 0])
  const scrollEl = useRef<HTMLDivElement>(null)

  const scroll = (distance: number) => {
    console.log('scroll', distance)

    if (scrollEl.current) {
      const leftPos = scrollEl.current.scrollLeft + distance
      scrollEl.current?.scrollTo({ left: leftPos, behavior: 'smooth' })
    }
  }

  const getScrollWidthEnd = (scrollElement: RefObject<HTMLDivElement>) => {
    if (scrollElement?.current) {
      const { scrollWidth, clientWidth } = scrollElement.current
      return scrollWidth - clientWidth
    }
    return 0
  }

  const scrollListesener = () => {
    const start = scrollEl.current ? scrollEl?.current.scrollLeft : 0
    const end = (() => {
      if (scrollEl?.current) {
        const { scrollWidth, clientWidth } = scrollEl.current
        return scrollWidth - clientWidth
      }
      return 0
    })()
    setScrollPos([start, end - start])
  }
  useEffect(() => {
    scrollListesener()
  }, [])

  return [scrollPos, scrollEl, scrollListesener, scroll]
}
