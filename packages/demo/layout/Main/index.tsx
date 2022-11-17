export type Props = JSX.IntrinsicElements['main'] & {}

function Main(props: Props) {
  const { children, ...otherProps } = props

  return (
    <main {...otherProps} className="w-main max-w-main flex-auto">
      {children}
    </main>
  )
}

Main.defaultProps = {}

export default Main
