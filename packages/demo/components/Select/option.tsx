import cn from 'classnames'

// Components
import { Value as InputValue } from '../Input'

// Helpers
import { highlight } from 'helpers/text'

export type Value = number | string | null | undefined

export type Props = Omit<JSX.IntrinsicElements['div'], 'children'> & {
  /** Состояние "активный" (наведена мышь или выбран стрелками) */
  active?: boolean
  /** Текст для отображения */
  children?: string
  /** "disabled" состояние */
  disabled?: boolean
  /** Текст в инпуте */
  highlightQuery?: InputValue
  /** Значение совпадает со значением Select */
  selected?: boolean
  /** Значение */
  value: Value
}

function Option(props: Props) {
  const {
    active,
    children,
    className: cls,
    disabled,
    highlightQuery,
    selected,
    value,
    ...otherProps
  } = props

  const highlightedChildren =
    children && highlightQuery ? highlight(children, highlightQuery) : children

  if (highlightQuery && highlightedChildren === children) {
    return null
  }

  // Classnames
  const className = cn('px-5 py-2', {
    'bg-gray-100': disabled && (active || selected),
    'bg-gray-200': !disabled && (active || selected),
    'cursor-not-allowed': disabled,
    'opacity-50': disabled,
    cls,
  })

  return (
    <div
      {...otherProps}
      className={className}
      dangerouslySetInnerHTML={{ __html: highlightedChildren as string }}
    />
  )
}

Option.defaultProps = {
  active: false,
  disabled: false,
  selected: false,
}

export default Option
