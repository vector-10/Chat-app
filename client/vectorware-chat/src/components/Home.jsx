import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = ({socket}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        socket.emit('newUser', {username, socketID: socket.id})
        navigate('/chat');
    }
  return (
    <form className="home__container" onSubmit={handleSubmit}>
    <h2 className="home__header">Input a Username to Sign In</h2>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      minLength={6}
      name="username"
      id="username"
      className="username__input"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <button className="home__cta">SIGN IN</button>
  </form>
  )
}

export default Home