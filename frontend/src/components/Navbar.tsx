import React, { Dispatch, FC, useEffect } from 'react'
import { Layout, Row, Menu } from 'antd';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { RouteNames } from '../router';
import {useTypedSelector} from '../hooks/usedTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';
const { Header } = Layout;

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);
  const {isAuth, user} = useTypedSelector(state => state.auth)
  return (
    <Header >
        <Row justify='end'>
            {isAuth 
                ? 
                <>
                <div style={{color: 'white'}}>{user.username}</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                 onClick={() => dispatch(AuthActionCreators.logout())}
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