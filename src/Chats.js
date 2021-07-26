import React from 'react';
import styled from "styled-components";
import Chat from "./Chat";

function Chats() {
    return (
        <div>
            <ChatStyling>
                <Chat
                    name="Mark"
                    message="Yo whats up?"
                    timestamp="40 seconds ago"
                    profilePic="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                
                />
                <Chat
                    name="Mark"
                    message="Yo whats up?"
                    timestamp="40 seconds ago"
                    profilePic="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                
                />
                <Chat
                    name="Mark"
                    message="Yo whats up?"
                    timestamp="40 seconds ago"
                    profilePic="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                
                />
                <Chat
                    name="Mark"
                    message="Yo whats up?"
                    timestamp="40 seconds ago"
                    profilePic="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                
                />  
            </ChatStyling>
        </div>
    )
}

const ChatStyling = styled.div``;

export default Chats


