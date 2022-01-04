import Link from 'src/components/atoms/Link'
import { submenuType } from 'src/static/menuItems'

export interface IMenuItemPartitionProps {
  text: submenuType[] | submenuType
  className?: string
}

const MenuItemPartition = ({ text, className }: IMenuItemPartitionProps) => {
  const input = text instanceof Array ? text : [text]
  return (
    <div className='w-32 space-y-4 '>
      {input.map((ins) => (
        <div key={ins.title} className={`flex flex-col space-y-2 ${className}`}>
          <Link href='/' className='mb-1 font-bold leading-4'>
            {ins.title}
          </Link>
          {ins.subTitles.map((item) => (
            <Link
              key={item}
              href='/'
              className='text-sm leading-4 text-gray-600 hover:text-black hover:underline'
            >
              {item}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MenuItemPartition
