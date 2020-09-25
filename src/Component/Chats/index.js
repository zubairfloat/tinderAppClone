import React from 'react'
import Chat from './chat'

import './chats.css'

const Chats = () => {
    return <div>
        <Chat
            name="Triple H"
            message="hello dude"
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/f/fd/Triple_H_November_2017.jpg"
        />
        <Chat
            name="Anuu"
            message="Are you there"
            timestamp="3 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/e/e6/Anushka_Sharma_promoting_Zero.jpg"
        />
        <Chat
            name="Ali"
            message="Where"
            timestamp="3 days ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg"
        />
        <Chat
            name="Brett"
            message="Where you are now"
            timestamp="1 week ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/0/01/Brett_lee.JPG"
        />
    </div>
}

export default Chats;