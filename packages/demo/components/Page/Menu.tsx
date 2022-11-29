import cn from 'classnames'

export type Props = JSX.IntrinsicElements['nav'] & {}

function Menu(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn('flex flex-wrap gap-2.5 mt-8', cls)

  return (
    <nav {...otherProps} className={className}>
      {children}
    </nav>
  )
}

Menu.defaultProps = {}

export default Menu
