import React, {useContext, useState} from "react";
import classnames from "classnames";
import {MenuContext, MenuMode} from "./menu";
import {MenuItemProps} from "./menuItem";
import Icon from "../Icon/icon";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

export interface SubMenuProps {
  index?: string,
  title: string,
  className?: string
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
  const { index, title, children, className} = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === MenuMode.Vertical)
    ?openedSubMenus.includes(index) ? true : false
    :false
  const [ menuOpen, setMenuOpen ] = useState(isOpend)

  const classes = classnames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opend': menuOpen,
    'is-vertical': context.mode === MenuMode.Vertical

  })
  const subMenuClasses = classnames('viking-submenu', {
    'menu-opened': menuOpen
  })
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)

    }, 300)

  }
  const clickEvent = context.mode === MenuMode.Vertical
    ? { onClick: handleClick }
    : {}
  const hoverEvent = context.mode === MenuMode.Horizontal
    ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave:(e: React.MouseEvent) => handleMouse(e, false)
      }
    : {}
  const renderChild = () => {
    const childComponent = React.Children.map(children,(child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}`})
      } else {
        console.log('必须是menuItem')
      }
    })
    return (
      <ul className={subMenuClasses}>
        { childComponent }
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div
        className="submenu-title"
        {...clickEvent}
      >{ title }
        <Icon icon={faAngleDown} className='arrow-icon'></Icon>
      </div>
      {renderChild()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
