import React from 'react';
import styled from 'styled-components';
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

function Chat({ name, message, profilePic, timestamp }) {
    return (
    <Link to={`/chats/${name}`}>
            <ChatContainer>
                <Avatar src={profilePic} />
                <ChatDetails>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </ChatDetails>
                <TimeStamp>
                    <p>{timestamp}</p>
                </TimeStamp>
            </ChatContainer>
    </Link>
    );
}

const ChatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 70px;
    border-bottom: 1px solid #fafafa;
    text-decoration: none;
`;

const ChatDetails = styled.div`
    
    h2 {
        color: inherit;
        
    }

    p {
        color: grey;
        text-decoration: none!important;
    }
`;

const TimeStamp = styled.div`
    color: lightgray;
    p{
        text-decoration: none;
    }
`;

export default Chat