import React, { FC } from 'react'
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
  const submit = () => console.log('submit')
  return (
    <Form
    onFinish={submit}
    >
         <Form.Item
      label="Имя пользователя"
      name="username"
      rules={[rules.required('Пожалуйста введите имя')]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Пароль"
      name="password"
      rules={[rules.required('Пожалуйста введите пароль')]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </Form.Item>
    </Form>
  )
}

export default LoginForm