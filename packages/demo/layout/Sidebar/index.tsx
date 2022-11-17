export type Props = JSX.IntrinsicElements['aside'] & {}

function Sidebar(props: Props) {
  const { children, ...otherProps } = props

  return (
    <aside {...otherProps} className="w-80">
      {children}
    </aside>
  )
}

Sidebar.defaultProps = {}

export default Sidebar
