import { ReactElement } from 'react'

export interface IHeaderTemplateProps {
  heading: string | ReactElement
  children: ReactElement | ReactElement[]
}

const HeaderTemplate = ({ heading, children }: IHeaderTemplateProps) => (
  <div>
    <h2 className='mb-6 text-2xl font-medium'>{heading}</h2>
    {children}
  </div>
)

export default HeaderTemplate
