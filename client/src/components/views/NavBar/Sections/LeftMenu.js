import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
        <Menu.Item key="mail">
            <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>Blogs</span>}>
            <menuitemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </menuitemGroup>
            <menuitemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </menuitemGroup>
        </SubMenu>
    </Menu>
    
  )
}

//LeftMenu.propTypes = {}

export default LeftMenu
