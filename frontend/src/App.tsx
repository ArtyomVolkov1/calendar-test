import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import './App.css';
const { Content } = Layout;
const App:FC = () => {
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
