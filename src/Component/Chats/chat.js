import React from 'react'
import { Link } from 'react-router-dom'

import './chats.css'
import { Avatar } from '@material-ui/core'

const Chat = ({ name, message, profilePic, timestamp }) => {
    return (
        <Link to={`/chatt/${name}`}>
            <div className="chat">
                <Avatar className="chat__image" alt={name} src={profilePic} />

                <div className="chat__details">
                    <h4>{name}</h4>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat; 