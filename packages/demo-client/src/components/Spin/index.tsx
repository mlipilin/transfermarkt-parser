import cn from 'classnames'

export type Props = JSX.IntrinsicElements['span'] & {
  /** Spin appearance */
  appearance?: 'primary' | 'secondary'
  /** Spin size */
  size?: 'm' | 'l'
}

function Spin(props: Props) {
  const { appearance, className: cls, size, ...otherProps } = props

  const className = cn(
    'animate-spin border-2 flex rounded-full',
    {
      'border-gray-200 border-t-primary': appearance === 'primary',
      'border-transparent border-t-white': appearance === 'secondary',
      'h-5 w-5': size === 'm',
      'h-10 w-10': size === 'l',
    },
    cls
  )

  return <span {...otherProps} className={className} />
}

Spin.defaultProps = {
  appearance: 'primary',
  size: 'm',
}

export default Spin
