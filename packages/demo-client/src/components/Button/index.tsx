import cn from 'classnames'

// Components
import Spin from '../Spin'

export type Props = Omit<JSX.IntrinsicElements['button'], 'disabled'> & {
  /** Block button (full container width) */
  block?: boolean
  /** "disabled" state */
  disabled?: boolean
  /** Loading indicator */
  isLoading?: boolean
  /** Loading indicator text (when `isLoading=true`) */
  loadingText?: string
}

function Button(props: Props) {
  const {
    block,
    children,
    className: cls,
    disabled,
    isLoading,
    loadingText,
    ...otherProps
  } = props

  const isButtonDisabled = disabled || isLoading

  const className = cn(
    'bg-sky-500 flex items-center justify-center px-5 py-2 text-white',
    {
      'cursor-default': isButtonDisabled,
      'hover:bg-sky-600 active:bg-sky-700': !isButtonDisabled,
      'opacity-75': isButtonDisabled,
      'w-full': block,
    },
    cls
  )

  return (
    <button {...otherProps} className={className} disabled={isButtonDisabled}>
      {isLoading ? (
        <>
          <Spin appearance="secondary" className="mr-2" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  )
}

Button.defaultProps = {
  block: false,
  disabled: false,
  isLoading: false,
  loadingText: 'Loading...',
}

export default Button
