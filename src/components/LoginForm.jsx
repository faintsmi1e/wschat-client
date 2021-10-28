import React, { useState} from 'react';
import {Button} from 'react-bootstrap';
import classes from './LoginForm.module.css';

const Loginform = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  const login = (e) => {
    console.log(roomId, userName)
  }
  const trimmedName = userName.trim()
  return (
    <div className={classes.LoginForm}>
      <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID"></input>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="User Name"></input>
      {trimmedName 
      ? (<Button onClick={login}>Войти</Button>)
      : (<Button disabled onClick={login}>Войти</Button>)
      }
      
    </div>
  );
}

export default Loginform;
