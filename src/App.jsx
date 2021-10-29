import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/LoginForm';
import reducer from './reducer';
import socket from './socket';

import Chat from './components/Chat';
import axios from 'axios';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isLogin: false,
    roomName: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    dispatch({
      type: 'connected',
      payload: obj,
    });
    socket.emit('room:join', obj);
    
  };
 

  const setUsers = (users) => {
    dispatch({
      type: 'setUsers',
      payload: users,
    });
  };

  useEffect(() => {
    console.log('pismo')
    socket.on('room:joined', setUsers);
    socket.on('room:setUsers', setUsers);
    socket.on('room:newMessage', message => {
      console.log(message)
      dispatch({
        type: 'newMessage',
        payload: message,
      });
    });
    
  }, []);

  return (
    <div className='App'>
      {!state.isLogin ? (
        <Loginform onLogin={onLogin}></Loginform>
      ) : (
        <Chat {...state} setUsers={setUsers}></Chat>
      )}
    </div>
  );
}

export default App;
