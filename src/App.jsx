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
    const room = await axios.get(`api/room/${obj.roomName}`);
    setMessages(room.data.messages);
  };
  const setMessages = (messages) => {
    dispatch({
      type: 'setMessages',
      payload: messages,
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: 'setUsers',
      payload: users,
    });
  };

  const addMessage = ({ text, userName, date }) => {
    dispatch({
      type: 'newMessage',
      payload: {
        text,
        userName,
        date,
      },
    });
  };

  useEffect(() => {
    console.log('pismo');
    socket.on('room:joined', setUsers);
    socket.on('room:setUsers', setUsers);
    socket.on('room:newMessage', addMessage);
  }, []);

  return (
    <div className='App'>
      {!state.isLogin ? (
        <Loginform onLogin={onLogin}></Loginform>
      ) : (
        <Chat {...state} setUsers={setUsers} addMessage={addMessage}></Chat>
      )}
    </div>
  );
}

export default App;
