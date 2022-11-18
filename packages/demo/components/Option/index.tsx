export type Props = Omit<
  JSX.IntrinsicElements['option'],
  'children' | 'value'
> & {
  children?: string
  /** Значение */
  value: number | string
}

export function getOptionProps(option: { props: Props }) {
  return {
    children: option.props.children,
    disabled: option.props.disabled,
    value: option.props.value,
  }
}

function Option(props: Props) {
  return <option {...props} />
}

export default Option
