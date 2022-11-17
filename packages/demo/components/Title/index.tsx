export type Props = JSX.IntrinsicElements['h1'] & {}

function Title(props: Props) {
  const { ...otherProps } = props

  return (
    <h1 {...otherProps} className="text-primary text-3xl">
      Transfermarkt Parser
      <span className="font-extralight ml-2 opacity-60">Playground</span>
    </h1>
  )
}

Title.defaultProps = {}

export default Title
