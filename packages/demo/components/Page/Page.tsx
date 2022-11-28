import cn from 'classnames'

export type Props = JSX.IntrinsicElements['div'] & {}

function Page(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn(
    'flex min-h-screen w-screen justify-center bg-gray-200',
    cls
  )

  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  )
}

Page.defaultProps = {}

export default Page
