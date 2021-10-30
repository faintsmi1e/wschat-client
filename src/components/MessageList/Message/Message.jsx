import TimeAgo from 'react-timeago'
import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';

const Message = ({ userName, message }) => {
  
  const currentUser = userName === message.userName ? true : false
  return (
    <ListGroup.Item className={`d-flex ${currentUser ? 'justify-content-end' : ''}`}>
      <Card
        bg={`${currentUser ? 'info' : 'success'}`}
        text='light'
        style={{ width: '55%' }}
      >
        <Card.Header className='d-flex justify-content-between align-items-center'>
          
          <Card.Text as={TimeAgo} date={message.date} className='small' /> 
          <Card.Text>{message.userName}</Card.Text>
        </Card.Header>
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Text>{message.text}</Card.Text>
          {/* удалять сообщения может только отправивший их пользователь */}
          {/* {currentUser && (
            <Button
              variant='none'
              className='text-warning'
              
            >
              
            </Button>
          )} */}
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

export default Message;
