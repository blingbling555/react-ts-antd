import React, { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string,
  disabled?: boolean,
  className?:  string,
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, disabled, index, className, style } = props
  const context = useContext(MenuContext)
  const classes = classnames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handlerClick = () => {
    if (context.onSelect && !disabled && (typeof index === "string")) {
      context.onSelect(index)
    }
  }
  return (
    <li style={style} className={classes} onClick={handlerClick}>
      {children}
    </li>
  )
}

// 添加静态属性
MenuItem.displayName = 'MenuItem'

export default MenuItem
