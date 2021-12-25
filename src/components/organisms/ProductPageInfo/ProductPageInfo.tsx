export interface IProductPageInfoProps {}

const ProductPageInfo = () => (
  <div className='p-3'>
    <h2 className='text-2xl font-semibold'>Nike Killshot OG</h2>
    <div className='mt-2 text-gray-800'>Men&apos;s shoes</div>
    <div className='mt-4 font-semibold'>₹8,295</div>
    <div className='mt-1 text-gray-600'>incl. of taxes and duties</div>
    <div className='flex flex-col gap-3 mt-8'>
      <button
        type='button'
        className='block w-full px-4 py-3 text-white bg-black rounded-full outline-offset-2'
      >
        Add to cart
      </button>
      <button
        type='button'
        className='block w-full px-4 py-3 text-black bg-white border border-black rounded-full'
      >
        Favorite
      </button>
    </div>
    <div className='mt-4 text-gray-700'>
      Inspired by the original low-profile tennis shoe, the Nike Killshot OG
      updates the upper with nubby washed wool and rich, textured leather
      overlays highlighting the eyestays, toe and Swoosh design.Share-and-swap
      patches on the heel round off the varsity-level design, channelling sport
      memorabilia of yesteryear.
    </div>
  </div>
)

export default ProductPageInfo
