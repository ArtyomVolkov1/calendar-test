import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd';

const { Header } = Layout;

const Navbar: FC = () => {
  return (
    <Header >
        <Row justify='end'>
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key={1}>Логин</Menu.Item>
            </Menu>
        </Row>
    </Header>
  )
}

export default Navbar