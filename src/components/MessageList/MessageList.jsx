import React from 'react';

import { ListGroup } from 'react-bootstrap'

import classes from './MessageList.module.css';



const Messagelist = (props) => {
  return (
    <div>
      <ListGroup variant='flush' className={classes.MessageList}>
        
      </ListGroup>
    </div>
  );
}

export default Messagelist;

