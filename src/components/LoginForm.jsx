import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './LoginForm.module.css';
import axios from 'axios';
import socket from '../socket'

const Loginform = ({onLogin}) => {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const objNames = {
    roomName,
    userName,
  }
  const login = (e) => {
    setLoading(true)
    axios
      .post('/api/room', {
        roomName,
        userName,
      }).then(() => {
        onLogin(objNames);
      })
      .catch((e) => console.log(e));
  };
  const trimmedName = userName.trim();
  
  return (
    <div className={classes.LoginForm}>
      <input
        className={classes.LoginFormElements}
        type='text'
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder='Room Name'
      ></input>
      <input
        className={classes.LoginFormElements}
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='User Name'
      ></input>
      {trimmedName ? (
        <Button disabled={isLoading} className={classes.LoginFormElements} onClick={login}>
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
