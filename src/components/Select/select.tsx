import {
  FC,
  useState,
  createContext,
  useRef,
  FunctionComponentElement,
  useEffect,
  Children,
  cloneElement,
  ReactNode,
  MouseEvent
} from 'react'
import classNames from 'classnames'
import { SelectOptionProps } from './option.tsx'
import Input from '@/components/Input/input.tsx'
import Icon from '@/components/Icon/icon.tsx'
import Transition from '@/components/Transition/transition.tsx'
import useClickOutside from '@/hooks/useClickOutside.tsx'

export interface SelectProps {
  defaultValue?: string | string[]
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  name?: string
  onChange?: (selectedValue: string, selectedValues: string[]) => void
  onVisibleChange?: (visible: boolean) => void
  children?: ReactNode
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void
  selectedValues: string[]
  multiple?: boolean
}

export const SelectContext = createContext<ISelectContext>({
  selectedValues: []
})

export const Select: FC<SelectProps> = props => {
  const {
    defaultValue,
    placeholder,
    children,
    multiple,
    name,
    disabled,
    onChange,
    onVisibleChange
  } = props

  const input = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLInputElement>(null)
  const containerWidth = useRef(0)
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : []
  )
  const [menuOpen, setOpen] = useState(false)
  const [value, setValue] = useState(
    typeof defaultValue === 'string' ? defaultValue : ''
  )

  const handleOptionClick = (value: string, isSelected?: boolean) => {
    // update value
    if (!multiple) {
      setOpen(false)
      setValue(value)
      if (onVisibleChange) {
        onVisibleChange(false)
      }
    } else {
      setValue('')
    }
    let updatedValues = [value]
    // click again to remove selected when is multiple mode
    if (multiple) {
      updatedValues = isSelected
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value]
      setSelectedValues(updatedValues)
    }
    if (onChange) {
      onChange(value, updatedValues)
    }
  }
  useEffect(() => {
    // focus input
    if (input.current) {
      input.current.focus()
      if (multiple && selectedValues.length > 0) {
        input.current.placeholder = ''
      } else {
        if (placeholder) input.current.placeholder = placeholder
      }
    }
  }, [selectedValues, multiple, placeholder])
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current =
        containerRef.current.getBoundingClientRect().width
    }
  })
  useClickOutside(containerRef, () => {
    setOpen(false)
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false)
    }
  })
  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple
  }
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    if (!disabled) {
      setOpen(!menuOpen)
      if (onVisibleChange) {
        onVisibleChange(!menuOpen)
      }
    }
  }
  const generateOptions = () => {
    return Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>
      if (childElement.type.displayName === 'Option') {
        return cloneElement(childElement, {
          index: `select-${i}`
        })
      } else {
        console.error(
          'Warning: Select has a child which is not a Option component'
        )
      }
    })
  }

  const containerClass = classNames('a-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple
  })

  return (
    <div className={containerClass} ref={containerRef}>
      <div className="a-select-input" onClick={handleClick}>
        <Input
          ref={input}
          placeholder={placeholder}
          value={value}
          readOnly
          icon="angle-down"
          disabled={disabled}
          name={name}
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
          <ul className="a-select-dropdown">{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
      {multiple && (
        <div
          className="a-selected-tags"
          style={{ maxWidth: containerWidth.current - 32 }}
        >
          {selectedValues.map((value, index) => {
            return (
              <span className="a-tag" key={`tag-${index}`}>
                {value}
                <Icon
                  icon="times"
                  onClick={() => {
                    handleOptionClick(value, true)
                  }}
                />
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
Select.defaultProps = {
  name: 'a-select',
  placeholder: '请选择'
}
export default Select
