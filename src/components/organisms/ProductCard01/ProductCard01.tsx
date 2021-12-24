import Image from 'src/components/atoms/Image'

export interface IProductCard01Props {
  displayName: string
  price: number
  category: string
  imgUrl: string
}

const ProductCard01 = ({
  displayName,
  price,
  category,
  imgUrl,
}: IProductCard01Props) => (
  <div>
    <Image
      src={imgUrl}
      alt='product'
      className='w-full rounded-sm h-80 aspect-square'
    />
    <div className='z-10 flex justify-between mt-4'>
      <div className='font-semibold'>{displayName}</div>
      <div>₹{price}</div>
    </div>
    <div className='text-gray-600'>{category}</div>
  </div>
)

export default ProductCard01
