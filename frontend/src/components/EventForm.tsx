import React, { FC, useState } from 'react'
import { Form, Input, Button, DatePicker, Select  } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import {formatDate} from '../utils/date';
import { useTypedSelector } from '../hooks/usedTypedSelector';


interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
  const selectDate = (date: Moment | any) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  };
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const {user} = useTypedSelector(state => state.auth);

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form onFinish={submitForm}>
        <Form.Item
      label="Описание события"
      name="description"
      rules={[rules.required('Обязательное поле')]}
    >
      <Input 
      onChange={e => setEvent({...event, description: e.target.value})}
      value={event.description}
      />
    </Form.Item>
    <Form.Item
    label="Дата события"
    name="date"
    rules={[rules.required('Обязательное поле')]}
    >
        <DatePicker
        onChange={(date) => selectDate(date)}
         />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
      <Button type="primary" htmlType="submit">
        Создать
      </Button>
    </Form.Item>
    <Form.Item 
    label="Выбор пользователя"
    name="guest"
    rules={[rules.required('Обязательное поле')]}>
    <Select  style={{ width: 120 }} onChange={(guest: string) => setEvent({...event, guest})}>
      {props.guests.map(guest => 
        <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>)}
    </Select>
    </Form.Item>
    </Form>
  )
}

export default EventForm