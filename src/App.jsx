import React, { useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/LoginForm';
import reducer from './reducer'
import socket from './socket'



function App() {
 const [state, dispatch] = useReducer(reducer, {
   isLogin: false,
   roomName: null,
   userName: null,
 })

 const onLogin = (obj) => {
   dispatch({
     type: 'isLogin',
     payload : obj
   });
   socket.emit('room:join', obj)
 }
console.log(state)

useEffect(() => {
  socket.on('room:joined', (users) => {
    console.log(users);
  })
}, [])

  return (
    <div className='App'>
      {!state.isLogin && <Loginform onLogin={onLogin}></Loginform>}
    </div>
  );
}

export default App;
