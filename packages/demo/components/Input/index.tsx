import { ChangeEvent } from 'react'

import cn from 'classnames'

export type Value = string | null | undefined

export type Props = Omit<
  JSX.IntrinsicElements['input'],
  'onChange' | 'value'
> & {
  /** Значение */
  value?: Value
  /** Обработчик события "change" */
  onChange?: (value: Value) => void
}

function checkIsEmptyValue(value: Value) {
  return [null, undefined, ''].includes(value)
}

function Input(props: Props) {
  const { className: cls, value, onChange = () => {}, ...otherProps } = props

  // Handlers
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value as Value)
  }

  const className = cn(
    'block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none',
    cls
  )

  return (
    <label className="block">
      <input
        {...otherProps}
        className={className}
        onChange={handleChange}
        value={!checkIsEmptyValue(value) ? (value as string) : ''}
      />
    </label>
  )
}

Input.defaultProps = {}

export default Input
