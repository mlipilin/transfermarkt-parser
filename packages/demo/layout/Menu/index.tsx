export type Props = JSX.IntrinsicElements['nav'] & {}

function Menu(props: Props) {
  const { children, ...otherProps } = props

  return (
    <nav {...otherProps} className="mt-8 flex gap-x-2.5">
      {children}
    </nav>
  )
}

Menu.defaultProps = {}

export default Menu
