export type Props = JSX.IntrinsicElements['h2'] & {}

function Subtitle(props: Props) {
  const { children, ...otherProps } = props

  return (
    <h2 {...otherProps} className="mb-4 text-xl">
      {children}
    </h2>
  )
}

Subtitle.defaultProps = {}

export default Subtitle
