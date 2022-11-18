import cn from 'classnames'

export type Props = JSX.IntrinsicElements['div'] & {}

function Container(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn(
    'w-container border-primary border-t-4 bg-white px-8 pt-14 pb-8',
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
