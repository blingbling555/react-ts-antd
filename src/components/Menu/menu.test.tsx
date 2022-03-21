import React from 'react'
import { render, RenderResult, fireEvent, wait } from '@testing-library/react'
import Menu, { MenuProps, MenuMode } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from './subMenu'
// jest.mock('../Icon/icon', () => {
//   return () => {
//     return <i className="fa" />
//   }
// })
// jest.mock('react-transition-group', () => {
//   return {
//     CSSTransition: (props: any) => {
//       return props.children
//     }
//   }
// })
const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: MenuMode.Vertical,
  // defaultOpenSubMenus: ['4']
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem >
        active
      </MenuItem>
      <MenuItem disabled >
        disabled
      </MenuItem>
      <MenuItem >
        xyz
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem >
          drop1
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem >
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyleFile = () => {
  const cssFile: string = `
    .viking-submenu {
      display: none;
    }
    .viking-submenu.menu-opened {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, wrapper2: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  // beforeEach相当于是全部变量
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    // 也可以通过这个获取到菜单壳
    // wrapper.container.getElementsByClassName()
    menuElement= wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    // 测试ul在文档中
    expect(menuElement).toBeInTheDocument()
    // 测试用哪些类名
    expect(menuElement).toHaveClass('viking-menu test')
    // 测试它下面的子元素有几个
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    // 测试激活的li的类名有哪些
    expect(activeElement).toHaveClass('menu-item is-active')
    // 测试禁用元素的类名
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    // 测试点击
    fireEvent.click(thirdItem)
    // 点击的元素有is-active的类名
    expect(thirdItem).toHaveClass('is-active')
    // 测试前一个激活元素没有了is-active的类名
    expect(activeElement).not.toHaveClass('is-active')
    // 调用的参数是2
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    // 测试禁用元素的点击效果
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    // 调用的参数是1
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
  })
})
describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps))
    wrapper2.container.append(createStyleFile())
  })
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('should show dropdown items when click on subMenu for vertical mode', () => {
    const dropDownItem = wrapper2.queryByText('drop1')
    expect(dropDownItem).not.toBeVisible()
    fireEvent.click(wrapper2.getByText('dropdown'))
    expect(dropDownItem).toBeVisible()
  })
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper2.queryByText('opened1')).toBeVisible()
  })
})
