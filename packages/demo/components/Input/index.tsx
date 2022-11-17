import React from 'react'

export type Props = JSX.IntrinsicElements['input'] & {}

function Input(props: Props) {
  const { ...otherProps } = props

  return (
    <label className="mb-5 block">
      <input
        {...otherProps}
        className="block h-10 w-full border border-gray-300 px-5 focus:border-gray-400 focus:outline-none"
      />
    </label>
  )
}

Input.defaultProps = {}

export default Input
