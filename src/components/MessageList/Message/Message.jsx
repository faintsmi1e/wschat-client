import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap'


const Message = ({message}) => {
  return (
    // <div className='Message'>
    //   <p>{message.text}</p>
    //   <div>
    //     <span>{message.userName}</span>
    //   </div>
      
    // </div>
    <ListGroup.Item
      className={`d-flex ${false ? 'justify-content-end' : ''}`}
    >
      <Card
        bg={`${false ? 'info' : 'success'}`}
        text='light'
        style={{ width: '55%' }}
      >
        <Card.Header className='d-flex justify-content-between align-items-center'>
          {/* передаем TimeAgo дату создания сообщения */}
          {/* <Card.Text as={TimeAgo} date={createdAt} className='small' /> */}
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
}

export default Message;
