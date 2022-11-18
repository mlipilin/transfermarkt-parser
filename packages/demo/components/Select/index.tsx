import {
  KeyboardEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2'

import cn from 'classnames'

// Helpers
import { highlight } from 'helpers/text'

// import Icon from '../Icon'
import Input, { Value as InputValue } from '../Input'
import { getOptionProps, Props as HTMLOptionProps } from '../Option'

import Option, { Props as OptionProps } from './option'

export type Children = { props: HTMLOptionProps } | { props: HTMLOptionProps }[]
export type Value = number | string | null | undefined
export type Props = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'onChange'
> & {
  /** Список значений */
  children: Children
  /** "disabled" состояние */
  disabled?: boolean
  /** Текст ошибки */
  error?: string
  /** Маска ввода */
  mask?: string
  /** Текст, когда поиск не дал результатов */
  notFoundText?: ReactNode
  /** Заголовок поля */
  placeholder: string
  /** Значение */
  value?: Value
  /** Обработчик события "change" */
  onChange?: (value: Value) => void
}

function Select(props: Props) {
  const {
    children,
    className: cls,
    disabled,
    error,
    mask,
    notFoundText,
    placeholder,
    value,
    onChange,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const optionsWrapperRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)

  // State
  const [hasInputFocus, setHasInputFocus] = useState(false)
  const [inputValue, setInputValue] = useState<InputValue>(null)

  // Memo
  const options = useMemo(() => {
    let optionsArray = (Array.isArray(children) ? children : [children]).map(
      getOptionProps
    )
    if (inputValue) {
      optionsArray = optionsArray.filter((option) => {
        return option.children
          ? option.children !== highlight(option.children, inputValue)
          : true
      })
    }
    return optionsArray
  }, [children, inputValue])

  const valueText = useMemo(() => {
    const selectedChildren = options.find((option) => option.value === value)
    return selectedChildren ? selectedChildren.children : undefined
  }, [options, value])

  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(
    options.findIndex((option) => option.value === value)
  )

  // Effects
  useEffect(() => {
    const optionsWrapperEl = optionsWrapperRef.current
    const optionsEl = optionsRef.current
    const activeOptionEl = optionsEl?.querySelector(
      `div:nth-child(${activeOptionIndex + 1})`
    )

    if (optionsWrapperEl && optionsEl && activeOptionEl) {
      const activeOptionElRect = activeOptionEl.getBoundingClientRect()
      const optionsWrapperElRect = optionsWrapperEl.getBoundingClientRect()

      const elementTop = activeOptionElRect.top
      const elementBottom = elementTop + activeOptionElRect.height
      const wrapperTop = optionsWrapperElRect.top
      const wrapperBottom = wrapperTop + optionsWrapperElRect.height

      console.log('optionsEl', optionsEl)
      if (elementTop < wrapperTop) {
        optionsEl.scrollTop = optionsEl.scrollTop - (wrapperTop - elementTop)
      } else if (elementBottom > wrapperBottom) {
        optionsEl.scrollTop =
          optionsEl.scrollTop + (elementBottom - wrapperBottom)
      }
    }
  }, [activeOptionIndex])

  // Handlers
  function handleInputBlur() {
    setHasInputFocus(false)
    setActiveOptionIndex(options.findIndex((option) => option.value === value))
  }
  function handleInputFocus() {
    setHasInputFocus(true)
  }
  function handleInputKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowDown': {
        e.preventDefault()
        let index = activeOptionIndex
        if (options.length === 0) {
          index = -1
        } else if (options.length - 1 > index) {
          index = index + 1
        } else if (index >= options.length) {
          index = 0
        }
        setActiveOptionIndex(index)
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        let index = activeOptionIndex
        if (index > 0) {
          if (options.length < index) {
            index = options.length - 1
          } else if (index > 0) {
            index = index - 1
          }
        }
        setActiveOptionIndex(index)
        break
      }
      case 'Enter': {
        const activeOption = options[activeOptionIndex]
        console.log('activeOption', activeOption)
        if (!activeOption) {
          return
        }
        const { disabled, value } = activeOption
        if (!disabled && typeof onChange === 'function') {
          onChange(value)
          inputRef.current?.blur()
          setInputValue(null)
          setActiveOptionIndex(activeOptionIndex)
        }
        break
      }
    }
  }
  const handleOptionMouseDown = (optionProps: OptionProps) => () => {
    if (!optionProps.disabled && typeof onChange === 'function') {
      onChange(optionProps.value)
    }
  }
  const handleOptionMouseOver = (index: number) => () => {
    setActiveOptionIndex(index)
  }

  const inputProps = {
    className: 'box-border pr-10 text-ellipsis',
    disabled,
    error,
    mask,
    placeholder: valueText || placeholder,
    ref: inputRef,
    value: hasInputFocus ? inputValue : valueText,
    onBlur: handleInputBlur,
    onChange: setInputValue,
    onKeyDown: handleInputKeyDown,
    onFocus: handleInputFocus,
  }

  const className = cn('relative', cls)

  const iconClass = cn(
    'absolute flex h-10 items-center justify-center overflow-hidden right-0 text-gray-600 w-10',
    {
      'text-gray-800': hasInputFocus,
    }
  )

  const optionsContainerClass = cn(
    'absolute bg-white border border-gray-300 box-border max-h-48 overflow-hidden shadow-lg top-1 w-full z-30',
    {
      hidden: !hasInputFocus,
    }
  )

  const optionsListClass = cn('box-border -mt-px')

  const optionsNotFoundClass = cn('px-5 py-2')

  return (
    <div {...otherProps} className={className}>
      <span className={iconClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </span>
      <div className="Select__InputWrapper">
        <Input {...inputProps} />
      </div>
      <div className="relative">
        <div className={optionsContainerClass} ref={optionsWrapperRef}>
          <div className={optionsListClass} ref={optionsRef}>
            {options.length ? (
              <Scrollbars autoHeight autoHeightMax={192}>
                {options.map((option, index) => {
                  return (
                    <Option
                      key={option.value}
                      {...option}
                      active={index === activeOptionIndex}
                      highlightQuery={inputValue}
                      selected={option.value === value}
                      onMouseDown={handleOptionMouseDown(option)}
                      onMouseOver={handleOptionMouseOver(index)}
                    />
                  )
                })}
              </Scrollbars>
            ) : (
              <div className={optionsNotFoundClass}>{notFoundText}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Select.defaultProps = {
  disabled: false,
  notFoundText: 'No options found',
  value: null,
  onChange: () => {},
}

export default Select
