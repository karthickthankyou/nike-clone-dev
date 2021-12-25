import { ReactElement } from 'react'
import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link'

export interface IBannerCardProps {
  imgSrc: string
  children?: ReactElement | ReactElement[]
  className?: string
}

const BannerText = ({
  variant = 'description',
  className,
  children,
}: {
  variant?: 'description' | 'title' | 'displayText'
  className?: string
  children: ReactElement | string
}) => {
  const textSize = {
    description: 'text-base',
    title: 'text-2xl',
    displayText: 'text-5xl',
  }
  return (
    <div className={`text-white ${textSize[variant]} max-w-md ${className}`}>
      {children}
    </div>
  )
}

const BannerButton = ({
  className,
  children,
  href,
}: {
  className?: string
  children: ReactElement | string
  href: string
}) => (
  <Link href={href} className={`px-4 py-1 rounded-full bg-white ${className}`}>
    {children}
  </Link>
)

const BannerCard = ({ imgSrc, children, className }: IBannerCardProps) => (
  <div className={`relative w-full h-112 sm:h-128 lg:h-176 ${className}`}>
    <Image
      src={imgSrc}
      alt='banner image'
      className='absolute inset-0 pointer-events-none -z-10'
    />
    <div className='absolute inset-0 flex flex-col items-start justify-end p-8'>
      {children}
    </div>
  </div>
)

BannerCard.Button = BannerButton
BannerCard.Text = BannerText

export default BannerCard
