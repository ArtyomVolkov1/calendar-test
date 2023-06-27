import React, { FC, useEffect } from 'react'
import { Layout, Row, Menu } from 'antd';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { RouteNames } from '../router';
import {useTypedSelector} from '../hooks/usedTypedSelector';
const { Header } = Layout;

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    <Header >
        <Row justify='end'>
            {isAuth 
                ? 
                <>
                <div style={{color: 'white'}}>Artyom</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                 onClick={() => console.log('Выйти')}
                   key={1}>
                    Выйти
                </Menu.Item>
            </Menu>
            </>
                : 
                <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                 onClick={() => navigate(RouteNames.LOGIN)}
                   key={1}>
                    Логин
                </Menu.Item>
            </Menu>
          }
        </Row>
    </Header>
  )
}

export default Navbar