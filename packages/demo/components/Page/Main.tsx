import cn from 'classnames'

export type Props = JSX.IntrinsicElements['main'] & {}

function Main(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn(
    'flex-auto lg:max-w-main-lg lg:w-main-lg xl:max-w-main-xl xl:w-main-xl',
    cls
  )

  return (
    <main {...otherProps} className={className}>
      {children}
    </main>
  )
}

Main.defaultProps = {}

export default Main
