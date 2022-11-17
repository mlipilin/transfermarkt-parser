import cn from 'classnames'

export type Props = JSX.IntrinsicElements['a'] & {
  isActive: boolean
}

function MenuItem(props: Props) {
  const { children, isActive, ...otherProps } = props

  const className = cn('px-5 py-2 text-white', {
    'bg-primary': isActive,
    'bg-primary-lightest': !isActive,
    'hover:bg-primary-light': !isActive,
    'active:bg-primary': !isActive,
  })

  return (
    <>
      <a {...otherProps} className={className}>
        {children}
      </a>
    </>
  )
}

MenuItem.defaultProps = {
  isActive: false,
}

export default MenuItem
