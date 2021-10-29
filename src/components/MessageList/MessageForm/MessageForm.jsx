import { readFileSync } from 'fs'
import { useState } from 'react'
// стили
import { Form, Button } from 'react-bootstrap'
// эмодзи

// иконки
import { BsFillPenFill } from 'react-icons/bs'
import { GrEmoji } from 'react-icons/gr'
import socket from '../../../socket'


const MessageForm = ({roomName, userName}) => {
  const [messageValue, setMessageValue] = useState('');
  const onSendMessage = () => {
    
  socket.emit('room:newMessage', {
      roomName,
      userName,
      text: messageValue
    })
  }
  const handleMessage = (e) => {
    e.preventDefault()
    console.log(onSendMessage)
    onSendMessage()
    // const trimmed = text.trim()
    // if (trimmed) {
    //   sendMessage({ messageText: text, senderName: username })
    //   setText('')
    // }
  }
  
  return (
    
    <Form onSubmit={handleMessage}>
        <Form.Group className='d-flex'>
          {/* <Button variant='primary' type='button' >
            <GrEmoji />
          </Button> */}
          <Form.Control
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            
            type='text'
            placeholder='Message...'
          />
          <Button variant='success' type='submit'>
            <BsFillPenFill />
          </Button>
        </Form.Group>
      </Form>
  );
}

export default MessageForm;