import ProductPageInfo from 'src/components/organisms/ProductPageInfo'
import Image from 'src/components/atoms/Image'

export interface IProductPageProps {}

const ProductPage = () => (
  <div className='bg-white'>
    <div className='relative grid grid-cols-3 gap-3'>
      <div className='grid grid-cols-2 col-span-2 gap-3'>
        {[
          'https://static.nike.com/a/images/t_PDP_1728_v1/5a34d721-18f3-475f-bdd9-8a69baf97c24/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/7387404e-787e-4ee3-bf91-01f60ac33864/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/cd41dae5-2dfc-4147-8df5-aea3a49cdbbd/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/dc8dec50-f085-44e5-aa40-555234598533/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/21db27e7-a567-4e08-a86b-1358d6168e14/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/13decd90-79bf-4273-a921-667ffe28712a/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/37cade11-82b2-4ce3-b62c-bdeb81f1e14f/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/bb21b13f-22b1-4385-a5cf-3073a7f599bf/air-max-90-shoe-r5WqV3.jpg',
          'https://static.nike.com/a/images/t_PDP_1728_v1/546a4972-8451-43d6-9c10-47f9fa5e164b/air-max-90-shoe-r5WqV3.jpg',
        ].map((item) => (
          <Image key={item} alt='shoe' className='block h-128' src={item} />
        ))}
      </div>
      <div className='col-span-1'>
        <div className='sticky top-0 '>
          <br className='my-4' />
          <ProductPageInfo />
        </div>
      </div>
    </div>
    <div className='bg-red-200 py-96'>Hello</div>
    <div className='bg-red-200 py-96'>Hello</div>
    <div className='bg-red-200 py-96'>Hello</div>
  </div>
)

export default ProductPage
