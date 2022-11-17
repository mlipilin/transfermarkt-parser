export type Props = JSX.IntrinsicElements['div'] & {}

function Container(props: Props) {
  const { children, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className="w-container border-primary border-t-4 bg-white px-8 pt-14 pb-8"
    >
      {children}
    </div>
  )
}

Container.defaultProps = {}

export default Container
