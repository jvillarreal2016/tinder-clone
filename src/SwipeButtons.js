import React from 'react'
import styled from 'styled-components';
import ReplayIcon from './images/replay-icon.png';
import CloseIcon from './images/close-icon.png';
import StarRateIcon from './images/star-icon.png';
import FavoriteIcon from './images/heart-icon.png';
import FlashOnIcon from './images/flash-icon.png';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (

        <SwipeButton>
            <div>
                <IconButton>
                    <Replay>
                        <img src={ReplayIcon} alt="" />
                    </Replay>
                </IconButton>
                <IconButton>
                    <Close>
                    <img src={CloseIcon} alt="" />
                    </Close>
                </IconButton>
                <IconButton>
                    <StarRate>
                    <img src={StarRateIcon} alt="" />
                    </StarRate>
                </IconButton>
                <IconButton>
                    <Favorite>
                    <img src={FavoriteIcon} alt="" />
                    </Favorite>
                </IconButton>
                <IconButton>
                    <Flash>
                    <img src={FlashOnIcon} alt="" />
                    </Flash>
                </IconButton>
                
            </div>
        </SwipeButton>
    )
}

const SwipeButton = styled.div`
    position: fixed;
    bottom: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    img {
        width: 24px;
        height: 24px;
    }
`;

const Replay = styled.div`
    img {
    padding: 3vw !important;
    color: #f5b748 !important;
    }
`;

const Close = styled.div`
    img {
        padding: 3vw !important;
    }
`;

const StarRate = styled.div`
    img {
        padding: 3vw !important;
    }
`;

const Favorite = styled.div`
    img {
        padding: 3vw !important;
    }
`;

const Flash = styled.div`
    img {
        padding: 3vw !important;;
    }
`;

export default SwipeButtons
