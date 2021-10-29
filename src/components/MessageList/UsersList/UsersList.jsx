import React from 'react';
import { Accordion, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import classes from './UsersList.module.css';
const Userslist = ({ users, messages }) => {
  console.log(users);

  return (
    <Accordion className='mt-4'>
      <Accordion.Item>
        <Accordion.Header>Users</Accordion.Header>
        <Accordion.Body className={classes.UsersList}>
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
