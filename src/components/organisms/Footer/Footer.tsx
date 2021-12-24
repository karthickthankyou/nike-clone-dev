import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { IconType } from '@react-icons/all-files'
import Link from 'src/components/atoms/Link'

const Icon = ({ IconInput }: { IconInput: IconType }) => (
  <Link
    href='/'
    className='w-8 h-8 p-1.5 rounded-full text-black bg-gray-400  hover:bg-white'
  >
    <IconInput className='w-full h-full ' />
  </Link>
)

const FooterLink = ({ text }: { text: string }) => (
  <Link href='/' className='block text-gray-500 hover:text-white'>
    <li>{text}</li>
  </Link>
)

const Footer = ({ className }: { className?: string }) => (
  <footer className={`text-gray-100 bg-gray-900 ${className}`}>
    <div className='container py-6 mx-auto'>
      <div className='grid-cols-2 gap-2 md:grid '>
        <div className='grid gap-2 space-y-4 text-xs text-gray-500 md:grid-cols-3 md:space-y-0'>
          <ul className='space-y-2 text-white uppercase'>
            {[
              'FIND A STORE',
              'BECOME A MEMBER',
              'SIGN UP FOR EMAIL',
              'STUDENT DISCOUNTS',
              'SEND US FEEDBACK',
            ].map((item) => (
              <li key={item}>
                <Link href='/' className='text-white'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='space-y-2'>
            <li className='text-white uppercase'>GET HELP</li>
            {[
              'Order Status',
              'Delivery',
              'Returns',
              'Payment Options',
              'Contact Us On Nike.com Inquiries',
              'Contact Us On All Other Inquiries',
            ].map((item) => (
              <FooterLink key={item} text={item} />
            ))}
          </ul>
          <ul className='space-y-2'>
            <li className='text-white uppercase'>ABOUT NIKE</li>
            {['News', 'Careers', 'Investors', 'Sustainability'].map((item) => (
              <FooterLink key={item} text={item} />
            ))}
          </ul>
        </div>
        <div className='flex gap-3 mt-4 md:justify-end md:mt-0'>
          {[FaYoutube, FaFacebook, FaTwitter, FaInstagramSquare].map(
            (SocialIcon) => (
              <Icon key={SocialIcon.toString()} IconInput={SocialIcon} />
            )
          )}
        </div>
      </div>
      <hr className='my-4 border-gray-700' />
      <div className='justify-between text-xs md:flex'>
        <ul className='flex gap-2'>
          <li>Nike Clone, Karthick Ragavendran</li>
        </ul>
        <ul className='mt-2 md:space-x-2 md:flex md:mt-0'>
          {[
            'Guides',
            'Terms of Sale',
            'Terms of Use',
            'Nike Privacy Policy',
          ].map((item) => (
            <FooterLink key={item} text={item} />
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
