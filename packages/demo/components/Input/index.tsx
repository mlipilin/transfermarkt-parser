import { ChangeEvent, forwardRef } from 'react'

import cn from 'classnames'

export type Value = string | null | undefined

export type Props = Omit<
  JSX.IntrinsicElements['input'],
  'onChange' | 'value'
> & {
  /** Error text */
  error?: string
  /** Value */
  value?: Value
  /** "change" event handler */
  onChange?: (value: Value) => void
}

function checkIsEmptyValue(value: Value) {
  return [null, undefined, ''].includes(value)
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className: cls,
    error,
    value,
    onChange = () => {},
    ...otherProps
  } = props

  // Handlers
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value as Value)
  }

  const className = cn(
    'block h-10 w-full border px-5 focus:outline-none',
    {
      'border-gray-300 focus:border-gray-400': !error,
      'border-red-400 focus:border-red-500': error,
    },
    cls
  )

  return (
    <div>
      <label className="block">
        <input
          {...otherProps}
          className={className}
          ref={ref}
          onChange={handleChange}
          value={!checkIsEmptyValue(value) ? (value as string) : ''}
        />
      </label>
      {!!error && <div className="mt-1 text-red-500 text-sm">{error}</div>}
    </div>
  )
})

Input.defaultProps = {}

Input.displayName = 'Input'

export default Input
