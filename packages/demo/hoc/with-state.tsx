import { FC, useEffect, useState } from 'react'

type Value = boolean | number | string | null
type ValuePropType = 'value' | 'checked'

export default function <InnerComponentPropTypes = any>(
  Component: FC<InnerComponentPropTypes>,
  valuePropName: ValuePropType = 'value',
  defaultValue: Value = null
): FC<InnerComponentPropTypes> {
  function WithStateWrapper(props: InnerComponentPropTypes) {
    const [valuePropValue, change] = useState<Value>(
      // @ts-ignore
      props[valuePropName] || defaultValue
    )

    useEffect(() => {
      // @ts-ignore
      handleChange(props[valuePropName] as any)
      // @ts-ignore
    }, [props[valuePropName]])

    const handleChange = (value: Value) => {
      change(value)
    }

    const componentProps = {
      ...props,
      [valuePropName]: valuePropValue,
      onChange: handleChange,
    }

    return <Component {...componentProps} />
  }
  WithStateWrapper.displayName = Component.displayName

  return WithStateWrapper
}
