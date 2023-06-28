import { Button, Layout, Modal, Row } from 'antd'
import React, { Dispatch, FC, useEffect, useState } from 'react'
import CalendarEvent from '../components/CalendarEvent'
import EventForm from '../components/EventForm';
import { useDispatch } from 'react-redux';
import {EventActionCreators} from '../store/reducers/event/actions-creator';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {guests, events} = useTypedSelector(state => state.event)
  const dispatch: Dispatch<any> = useDispatch();
  const {user} = useTypedSelector(state => state.auth);
  useEffect(() => {
    dispatch(EventActionCreators.fetchGuests());
    dispatch(EventActionCreators.fetchEvents(user.username));
  },[]);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    dispatch(EventActionCreators.createEvent(event))
  }

  return (
    <Layout>
      <CalendarEvent events={events}/>
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
      title='Добавить событие'
      open={modalVisible}
      footer={null}
      onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Event