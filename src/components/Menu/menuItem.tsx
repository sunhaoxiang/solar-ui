import { useContext } from 'react'
import Classnames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'
import { MenuContext } from './menu.tsx'

export interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}

const MenuItem = (props: MenuItemProps) => {
  const {
    index,
    disabled,
    className,
    style,
    children,
  } = props

  const context = useContext(MenuContext)

  const classes = Classnames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })

  const handleClick = () => {
    if (context.onSelect && !disabled)
      context.onSelect(index)
  }

  return (
    <li
      className={classes}
      style={style}
      onClick={handleClick}
    >
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
