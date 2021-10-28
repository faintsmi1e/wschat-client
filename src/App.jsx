
import React from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './components/LoginForm';

const socket = io('http://localhost:8080');
console.log(socket )

function App() {
  return (
    <div className="App">
      <Loginform></Loginform>
    </div>
  );
}

export default App;
