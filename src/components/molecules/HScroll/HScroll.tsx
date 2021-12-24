import { createContext, ReactElement, useContext, useMemo } from 'react'

// import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft'
// import { HiOutlineChevronRight } from '@react-icons/all-files/hi/HiOutlineChevronRight'
import { useScroll } from 'src/hooks'

export interface IHScrollProps {
  children: ReactElement[]
  className?: string
}

const ScrollContext = createContext([] as any)

const RightArrow = ({
  children,
  className,
}: {
  children: ReactElement
  className?: string
}) => {
  const [scrollPos, scroll] = useContext(ScrollContext)
  const show = scrollPos[0] > 0
  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(-60)}
      >
        {children}
      </button>
    </div>
  )
}

const LeftArrow = ({
  children,
  className,
}: {
  children: ReactElement
  className?: string
}) => {
  const [scrollPos, scroll] = useContext(ScrollContext)
  const show = scrollPos[1] > 0
  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(60)}
      >
        {children}
      </button>
    </div>
  )
}
const HScrollBody = ({
  children,
  className,
}: {
  children: ReactElement[]
  className?: string
}) => {
  const [scrollEl, scrollListesener] = useContext(ScrollContext)
  return (
    <div
      ref={scrollEl}
      onScroll={scrollListesener}
      className={`flex py-3 space-x-2 overflow-x-scroll snap-x snap-mandatory scrollbar-hide ${className}`}
    >
      {children.map((child) => (
        <div key={child.key} className='flex-shrink-0 snap-start'>
          {child}
        </div>
      ))}
    </div>
  )
}

const HScroll = ({ children, className }: IHScrollProps) => {
  const [scrollPos, scrollEl, scrollListesener, scroll] = useScroll()

  const value = useMemo(
    () => [scrollPos, scrollEl, scrollListesener, scroll],
    [scroll, scrollEl, scrollListesener, scrollPos]
  )
  return (
    <ScrollContext.Provider value={value}>
      <div className={`relative ${className}`}>{children}</div>
    </ScrollContext.Provider>
  )
}

HScroll.LeftArrow = LeftArrow
HScroll.RightArrow = RightArrow
HScroll.Body = HScrollBody

export default HScroll
