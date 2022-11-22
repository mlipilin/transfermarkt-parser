import cn from 'classnames'

export type Props = JSX.IntrinsicElements['aside'] & {}

function Sidebar(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn('w-80', cls)

  return (
    <aside {...otherProps} className={className}>
      {children}
    </aside>
  )
}

Sidebar.defaultProps = {}

export default Sidebar
