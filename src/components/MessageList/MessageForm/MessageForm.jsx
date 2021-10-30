import { useState, useEffect } from 'react';

import { Form, Button, Modal } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Picker from 'emoji-picker-react';
import EmojiModal from './EmojiModal';



import {
  BsLink45Deg,
  BsFillEmojiHeartEyesFill,
  BsFillCursorFill,
  BsFillQuestionCircleFill,
  BsFiles,
} from 'react-icons/bs';

import socket from '../../../socket';
import Emojimodal from './EmojiModal';

const MessageForm = ({ roomName, userName, addMessage }) => {
  const [show, setShow] = useState(false);
  const [pickerShow, setPickerShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inviteLinkValue, setInviteLinkValue] = useState('');
  const handlePickerClose = () => setPickerShow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const ivniteLink = window.location.href + `?invite=${roomName}`;
    setInviteLinkValue(ivniteLink);
    setCopied(false);
    setShow(true);
  };
  const handlePickerShow = () => {
    
    setPickerShow(true);
  };
  const [messageValue, setMessageValue] = useState('');

  const [dateValue, setDateValue] = useState('');
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  

  const onSendMessage = () => {
    let currentDate = Date.now();

    socket.emit('room:newMessage', {
      roomName,
      userName,
      text: messageValue,
      date: dateValue,
    });
    addMessage({ userName, text: messageValue, date: currentDate });
  };
  const handleMessage = (e) => {
    e.preventDefault();
    setDateValue(new Date());
    onSendMessage();
    setMessageValue('');
  };

  return (
    <>
      <Form onSubmit={handleMessage}>
        <Form.Group className='d-flex'>
          <Button variant='success' type='button' onClick={handleShow}>
            <BsLink45Deg />
          </Button>
          <Button variant='warning' type='button'>
            <BsFillQuestionCircleFill color='black' />
          </Button>
          <Button variant='primary' type='button' onClick={handlePickerShow}>
            <BsFillEmojiHeartEyesFill color='yellow' />
          </Button>
          <Form.Control
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            type='text'
            placeholder='Message...'
          />
          <Button  variant='info' type='submit'>
            
            <BsFillCursorFill color='white' />
          </Button>
          
        </Form.Group>
      </Form>
      <EmojiModal setMessageValue={setMessageValue} show={pickerShow} setShow={setPickerShow} handlePickerClose={handlePickerClose}></EmojiModal>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            style={{ maxWidth: 'calc(100% - 50px)', display: 'inline' }}
            value={inviteLinkValue}
          ></Form.Control>
          <CopyToClipboard
            text={inviteLinkValue}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <Button variant='info' type='submit'>
              <BsFiles color='white' />
            </Button>
          </CopyToClipboard>
        </Modal.Body>
        <Modal.Footer>
          {copied ? (
            <span style={{ color: 'black', paddingLeft: '40px' }}>Copied.</span>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MessageForm;
