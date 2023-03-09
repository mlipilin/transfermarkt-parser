import cn from 'classnames'

export type Props = JSX.IntrinsicElements['div'] & {}

function Content(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn('mt-8 lg:flex lg:flex-row-reverse gap-x-8', cls)

  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  )
}

Content.defaultProps = {}

export default Content
