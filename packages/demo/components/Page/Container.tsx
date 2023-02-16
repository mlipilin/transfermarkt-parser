import cn from 'classnames'

export type Props = JSX.IntrinsicElements['div'] & {}

function Container(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn(
    'border-primary border-t-4 bg-white max-w-full py-8 px-4 md:px-8 md:pt-14 md:pb-8 w:full md:w-container-md lg:w-container-lg xl:w-container-xl',
    cls
  )

  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  )
}

Container.defaultProps = {}

export default Container
