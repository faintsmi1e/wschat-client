import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Messagelist from './MessageList/MessageList';
import Userslist from './MessageList/UsersList/UsersList';
import MessageForm from './MessageList/MessageForm/MessageForm';
import socket from '../socket';

const Chat = ({ users, messages, userName, roomName, addMessage }) => {
  return (
    <div>
      <div className='MessageList-wrapper'>
        <Userslist users={users} />

        <Messagelist userName={userName} messages={messages}></Messagelist>
      </div>
      <MessageForm
        messages={messages}
        roomName={roomName}
        userName={userName}
        addMessage={addMessage}
      ></MessageForm>
    </div>
  );
};

export default Chat;
