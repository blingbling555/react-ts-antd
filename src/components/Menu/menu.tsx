import React, { useState, createContext } from "react";
import classnames from "classnames";
import { MenuItemProps } from './menuItem'

// type MenuMode = 'horizontal' | 'vertical'
export enum MenuMode {
  'Horizontal'= 'horizontal',
  'Vertical' = 'vertical'
}
type SelectCallback = (selectedIndex: string) => void
export  interface MenuProps {
  defaultIndex: string,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: SelectCallback,
  defaultOpenSubMenus?: string[]
}
// type MenuProps = BaseMenuProps & React.BaseHTMLAttributes<HTMLElement>
interface IMenuContext {
  index: string,
  onSelect?: SelectCallback,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0'})
const Menu:React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classnames('viking-menu', className, {
    'menu-vertical': mode === MenuMode.Vertical,
    'menu-horizontal': mode === MenuMode.Horizontal,
  })
  const handleClick = (index: string) => {
    setActive(index)
    console.log(index, '點擊了')
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // 添加断言主要是为了有提示 childElement.type
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 把index传给子组件
        return React.cloneElement(childElement, {index: `${index}`})
        // return child
      } else {
        console.log(child, index)
        console.error("menu子组件必须是menuItem")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: MenuMode.Horizontal,
  defaultOpenSubMenus: []
}
export default Menu
