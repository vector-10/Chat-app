import React, { useState, useEffect } from 'react';

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([]);

    //The useEffect hook listens to the response sent from the server
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
      }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Spider Chat</h2>
      <div>
        <h4 className="chat__header">ONLINE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={users.socketID}>{user.username}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;