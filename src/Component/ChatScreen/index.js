import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import './chatScreen.css'
import SelectInput from '@material-ui/core/Select/SelectInput';

const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: "Triple H",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Triple_H_November_2017.jpg",
            message: "whats up man"
        },
        {
            name: "Triple H",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Triple_H_November_2017.jpg",
            message: "whats up man"
        },
        {
            message: "hows it going"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessage([...message, { message: input }]);
        setInput("")
    }
    return (
        <div className={"chatScreen"}>
            <p className="chatScreen__timetamp">You matched with tripple h</p>

            {message.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image "
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text" >{message.message}</p>
                    </div>

                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser" >{message.message}</p>
                        </div>

                    )

            ))}
            <div>
                <form className="chatScreen__input">
                    <input placeholder="Type a message.."
                        className="chatScreen__inputField"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                    />
                    <button onClick={handleSend} className="chatScreen__Btn">Send</button>
                </form>
            </div>
        </div>
    )
}


export default ChatScreen;