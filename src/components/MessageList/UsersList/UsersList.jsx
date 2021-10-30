import React from 'react';
import { Accordion, Card, Button, Badge, ListGroup } from 'react-bootstrap';


import classes from './UsersList.module.css';
const Userslist = ({ users, messages }) => {
  

  return (
    <Accordion className={classes.UsersAccordion}defaultActiveKey="0">
      <Accordion.Item className={classes.UsersList}>
        
          <ListGroup.Item>Users({users.length})</ListGroup.Item>
          <ListGroup className={classes.UsersOnlineList}>
          
            {users.map((user,index) => (
              <ListGroup.Item variant="light" key={index}>{user.userName}</ListGroup.Item>
            
            ))}
          </ListGroup>
        
      </Accordion.Item>
    </Accordion>
    
  );
};

export default Userslist;
