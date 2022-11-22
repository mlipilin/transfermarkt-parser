import cn from 'classnames'

export type Props = JSX.IntrinsicElements['main'] & {}

function Main(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn('w-main max-w-main flex-auto', cls)

  return (
    <main {...otherProps} className={className}>
      {children}
    </main>
  )
}

Main.defaultProps = {}

export default Main
