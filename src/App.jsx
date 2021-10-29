import React, { useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/LoginForm';
import reducer from './reducer'
import socket from './socket'

import Chat from './components/Chat'



function App() {
  
  
 const [state, dispatch] = useReducer(reducer, {
   isLogin: false,
   roomName: null,
   userName: null,
   users: [],
   messages: [],
 })
 

 const onLogin = (obj) => {
   dispatch({
     type: 'connected',
     payload : obj
   });
   socket.emit('room:join', obj)
 }
console.log(state)

const setUsers = (users) => {
  dispatch({
    type: 'setUsers',
    payload : users
  });
}

useEffect(() => {
  socket.on('room:joined', setUsers);
  socket.on('room:setUsers', setUsers);
}, [])

  return (
    <div className='App'>
      {!state.isLogin ? <Loginform onLogin={onLogin}></Loginform> : <Chat {...state} ></Chat>}
    </div>
  );
}

export default App;
