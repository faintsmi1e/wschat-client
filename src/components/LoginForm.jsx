import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from './LoginForm.module.css';
import axios from 'axios';
import socket from '../socket';

const Loginform = ({ onLogin }) => {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isInvited, setInvited] = useState(false);
  const objNames = {
    roomName,
    userName,
  };

  const checkInvite = () => {
    let isInvited = false;
    const params = new URLSearchParams(window.location.search);
    const inviteRoom = params.get('invite');
    if (inviteRoom) {
      isInvited = true 
      setRoomName(inviteRoom);
    }
    return isInvited
  };
  
  useEffect(() => {
    setInvited(checkInvite())
  }, []);
  
  const login = (e) => {
    setLoading(true);
    axios
      .post('/api/room', {
        roomName,
        userName,
      })
      .then(() => {
        onLogin(objNames);
      })
      .catch((e) => console.log(e));
  };
  const trimmedName = userName.trim();

  return (
    <div className={classes.LoginForm}>
      <Form.Control
        disabled={isInvited}
        className={classes.LoginFormElements}
        type='text'
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder='Room Name'
      ></Form.Control>
      <Form.Control
        className={classes.LoginFormElements}
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='User Name'
      ></Form.Control>
      {trimmedName ? (
        <Button
          disabled={isLoading}
          className={classes.LoginFormElements}
          onClick={login}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </Button>
      ) : (
        <Button disabled className={classes.LoginFormElements} onClick={login}>
          Войти
        </Button>
      )}
    </div>
  );
};

export default Loginform;
