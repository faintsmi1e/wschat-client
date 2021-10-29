import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Messagelist from './MessageList/MessageList';
import Userslist from './MessageList/UsersList/UsersList';
import MessageForm from './MessageList/MessageForm/MessageForm';
import socket from '../socket'

const Chat = ({users, messages,userName, roomName}) => {
  
  
  
  return (
    <div>
      <div className='MessageList-wrapper'>
        <Userslist users={users}/>
        <Messagelist messages={messages}></Messagelist>
      </div>
      <MessageForm messages={messages} roomName={roomName} userName={userName}></MessageForm>
    </div>
  );
}

export default Chat;
