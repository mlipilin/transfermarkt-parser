import cn from 'classnames'

export type Props = JSX.IntrinsicElements['aside'] & {}

function Sidebar(props: Props) {
  const { children, className: cls, ...otherProps } = props

  const className = cn('mb-8 lg:min-w-64 lg:w-64 xl:min-w-80 xl:w-80', cls)

  return (
    <aside {...otherProps} className={className}>
      {children}
    </aside>
  )
}

Sidebar.defaultProps = {}

export default Sidebar
