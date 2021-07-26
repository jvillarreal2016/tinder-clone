import React from 'react';
import personIcon from './images/person-icon.png';
import forumIcon from './images/forum-icon.png';
import styled from 'styled-components';
import tinderLogo from './images/tinderLogo.png';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header( {backButton} ) {
    const history = useHistory();

    return (
        <div>
            <HeaderStyling>
                {backButton ? ( 
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
                ) : (
                <IconButton>
                    <PersonIcon fontSize = "large" >
                        <img src={personIcon} alt=""/>
                    </PersonIcon>
                </IconButton>
                )
                }
                <Link to="/">
                    <TinderLogo>
                        <img src={tinderLogo} alt="" />
                    </TinderLogo>
                </Link>
                <IconButton>
                    <Link to="/chats">
                        <ForumIcon fontSize = "large" >
                            <img src={forumIcon} alt="" />
                        </ForumIcon>
                    </Link>
                </IconButton>
            </HeaderStyling>
        </div>
    );
}

const HeaderStyling = styled.div`
    display: flex; //pushes everything into a row
    justify-content: space-between; //give all children inside space between
    align-items: center;
    border-bottom: 1px solid #f9f9f9;

`;

const TinderLogo = styled.div`
    img {
        width: 48px;
        object-fit: contain; //keeps aspect ration while keeping size
        height: 40px;
    }
`;

const PersonIcon = styled.div`
    img {
        width: 48px;
        object-fit: contain; //keeps aspect ration while keeping size
        height: 40px;
    }
`;

const ForumIcon = styled.div`
    img {
        width: 48px;
        object-fit: contain; //keeps aspect ration while keeping size
        height: 40px;
    }
`;
export default Header;