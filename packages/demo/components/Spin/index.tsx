import cn from 'classnames'

export type Props = JSX.IntrinsicElements['span'] & {
  /** Spin appearance */
  appearance?: 'primary' | 'white'
  /** Spin size */
  size?: 's' | 'm'
}

function Spin(props: Props) {
  const { appearance, className: cls, size, ...otherProps } = props
  console.log('size', size)

  const className = cn(
    'animate-spin border-2 flex rounded-full',
    {
      'border-gray-200 border-t-primary': appearance === 'primary',
      'border-transparent border-t-white': appearance === 'white',
      'h-5 w-5': size === 's',
      'h-10 w-10': size === 'm',
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
