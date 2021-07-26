import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
            message: 'Whats up',
        },
        {
            name: 'Mark',
            image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
            message: 'Hows it going!',   
        },
        {
            message: 'Hows it going',
        }
    ]);

    const handleSend = e => {
        e.preventDefault(); //otherwise will refresh when you press enter on your keyboard

        setMessages([...messages, { message: input }])
        setInput("");

    }

    return (
        <div>
            <ChatScreenStyle>
                <ChatScreenTimeStamp>
                    <p>You matched with Mark on 10/08/20</p>
                </ChatScreenTimeStamp>
            {messages.map((message) => 
                message.name ? (
                    <ChatScreenMessage>
                    <Avatar 
                    alt={message.name}
                    src={message.image}
                    />
                    <p>{message.message}</p>
                </ChatScreenMessage>
                ) : (
                    <ChatMessageUser>
                        <p>{message.message}</p>
                    </ChatMessageUser>
                )
            )
            }
            </ChatScreenStyle>

            
                <form className="chatScreen__input">
                        <input classsName="chatScreen__inputField"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message.." 
                        type="text"
                        />
                        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            
        </div>
    )
}

const ChatScreenStyle = styled.div`

`;

const ChatScreenMessage = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    p {
        margin-left: 10px;
        background-color: lightgray;
        padding: 15px;
        border-radius: 20px;
    }
`;

const ChatScreenTimeStamp = styled.div`
    text-align: center;
    padding: 20px;
    color: grey;
`;

const ChatMessageUser = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

   p {
        margin-left: auto; //to push something the farthest it can, auto does the opposite of what label is
        background-color: #29b3cd;
        padding: 15px;
        border-radius: 20px;
        color: white;
   }
`;

export default ChatScreen
