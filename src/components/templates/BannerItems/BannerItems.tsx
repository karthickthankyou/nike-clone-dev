import { ReactElement } from 'react'

import Link from 'src/components/atoms/Link'

export interface IBannerItemsProps {
  className?: string
  children?: ReactElement | ReactElement[]
}

const BannerText = ({
  variant = 'description',
  color = 'inherit',
  className,
  children,
}: {
  variant?: 'description' | 'title' | 'displayText'
  color?: 'white' | 'black' | 'inherit'
  className?: string
  children: (ReactElement | string)[] | ReactElement | string
}) => {
  const textSize = {
    description: 'text-base',
    title: 'text-2xl',
    displayText: 'text-6xl tracking-tighter leading-80p font-black',
  }

  const textColor = {
    inherit: 'text-inherit',
    white: 'text-white',
    black: 'text-black',
  }
  return (
    <div className={`${textColor[color]}  ${textSize[variant]} ${className}`}>
      {children}
    </div>
  )
}

const BannerButton = ({
  className,
  variant = 'white',
  children,
  href,
}: {
  className?: string
  variant?: 'white' | 'black'
  children: ReactElement | string
  href: string
}) => {
  const buttonColor = {
    white: 'bg-white text-black',
    black: 'bg-black text-white',
  }
  return (
    <Link
      href={href}
      className={`px-5 py-1.5 rounded-full  ${buttonColor[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

const BannerItems = ({ children, className }: IBannerItemsProps) => (
  <div className={`${className}`}>{children}</div>
)

BannerItems.Button = BannerButton
BannerItems.Text = BannerText

export default BannerItems
