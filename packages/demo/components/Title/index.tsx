import cn from 'classnames'

export type Props = JSX.IntrinsicElements['h1'] & {}

function Title(props: Props) {
  const { className: cls, ...otherProps } = props

  const className = cn('text-primary text-3xl', cls)

  return (
    <h1 {...otherProps} className={className}>
      Transfermarkt Parser
      <span className="font-extralight ml-2 opacity-60">Playground</span>
    </h1>
  )
}

Title.defaultProps = {}

export default Title
