import React from 'react';
import Messagelist from './MessageList/MessageList';
import Userslist from './MessageList/UsersList/UsersList';

const Chat = ({users, messages, roomName}) => {
  console.log(roomName)
  return (
    <div>
      <Userslist users={users}/>
      <Messagelist></Messagelist>
    </div>
  );
}

export default Chat;
