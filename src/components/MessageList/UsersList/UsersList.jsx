import React from 'react';
import { Accordion, Card, Button, Badge, ListGroup } from 'react-bootstrap';


import classes from './UsersList.module.css';
const Userslist = ({ users, messages }) => {
  

  return (
    <Accordion className={classes.UsersAccordion}defaultActiveKey="0">
      <Accordion.Item className={classes.UsersList}>
        <Accordion.Header>Users</Accordion.Header>
        <Accordion.Body >
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item variant="info" key={user.id}>{user.userName}</ListGroup.Item>
            
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
};

export default Userslist;
