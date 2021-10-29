import React from 'react';

import { ListGroup } from 'react-bootstrap';
import Message from './Message/Message';

import classes from './MessageList.module.css';

const Messagelist = ({ messages }) => {
  console.log(messages);
  return (
    
      <ListGroup variant='flush' className={classes.MessageList}>
        {messages.map((message) => (
          <Message variant='info' message={message} key={message._id}>
           
          </Message>
        ))}
      </ListGroup>
    
  );
};

export default Messagelist;
