import cn from 'classnames'

export type Props = JSX.IntrinsicElements['span'] & {
  /** Active state */
  isActive?: boolean
}

function MenuItem(props: Props) {
  const { children, className: cls, isActive, ...otherProps } = props

  const className = cn(
    'inline-flex px-5 py-2 text-white',
    {
      'bg-primary': isActive,
      'bg-primary-lightest': !isActive,
      'hover:bg-primary-light': !isActive,
      'active:bg-primary': !isActive,
    },
    cls
  )

  return (
    <span {...otherProps} className={className}>
      {children}
    </span>
  )
}

MenuItem.defaultProps = {
  isActive: false,
}

export default MenuItem
