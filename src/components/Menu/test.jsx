import Menu, { MenuMode } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
const MenuTest = () => {
  const handlerSelect = (index) => {
    console.log(index)
  }
  return (
    <>
    <Menu mode={MenuMode.Vertical} onSelect={index =>handlerSelect(index)} defaultOpenSubMenus={['3']}>
      <MenuItem >列表1</MenuItem>
      <MenuItem  disabled={true}>列表2</MenuItem>
      <MenuItem>列表3</MenuItem>
      <SubMenu title="子组件">
        <MenuItem>子组件1</MenuItem>
        <MenuItem>子组件2</MenuItem>
      </SubMenu>
    </Menu>
      <Menu  onSelect={index =>handlerSelect(index)}>
        <MenuItem>列表1</MenuItem>
        <MenuItem disabled={true}>列表2</MenuItem>
        <MenuItem>列表3</MenuItem>
        <SubMenu title="子组件">
          <MenuItem>子组件1</MenuItem>
          <MenuItem>子组件2</MenuItem>
        </SubMenu>
      </Menu>
    </>
  )
}

export default MenuTest
