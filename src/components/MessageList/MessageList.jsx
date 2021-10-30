import React, { useRef, useEffect } from 'react';

import Message from './Message/Message';

import classes from './MessageList.module.css';

const Messagelist = ({ userName, messages }) => {
  console.log(messages)
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);
  return (
    <div ref={messagesRef} className={classes.MessageList}>
      {messages.map((message, index) => {
        
        return (
        <Message
          variant='info'
          userName={userName}
          message={message}
          key={index}
        ></Message>
      )})}
    </div>
  );
};

export default Messagelist;
