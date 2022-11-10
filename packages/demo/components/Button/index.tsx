import cn from 'classnames'

export type Props = Omit<JSX.IntrinsicElements['button'], 'disabled'> & {
  /** "disabled" condition */
  disabled?: boolean
  /** Loading indicator */
  isLoading?: boolean
}

function Button(props: Props) {
  const { children, disabled = false, isLoading = false, ...otherProps } = props

  const className = cn('w-full bg-sky-500 px-5 py-2 text-white', {
    'hover:bg-sky-600 active:bg-sky-700': !disabled,
    'cursor-default': disabled,
    'opacity-75': disabled || isLoading,
  })

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  )
}

export default Button
