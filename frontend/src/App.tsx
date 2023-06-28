import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import './App.css';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from './store/reducers/auth/action-creators';
import { IUser } from './models/IUser';
const { Content } = Layout;

const App:FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username' || '' )} as IUser));
      dispatch(AuthActionCreators.setIsAuth(true));
    }
  })
  return (
    <Layout>
      <Navbar />
      <Content>
      <AppRouter />
      </Content>
    </Layout>
  )
}
export default App;
