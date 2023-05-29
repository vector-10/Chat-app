import './App.css';
import socketIO from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Home from './components/Home';

const socket = socketIO.connect('chat-app-ashy-iota.vercel.app')

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element= {<Home socket={socket} />}></Route>
          <Route path='/chat' element= {<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
