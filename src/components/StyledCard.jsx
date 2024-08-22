import styled from 'styled-components';
import { Card } from '@mui/material';

const StyledCard = styled(Card)`
    width: 345px;
    height: 400px; /* Fixed height for uniform card sizes */
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .MuiCardContent-root {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Limit the text to 3 lines */
        -webkit-box-orient: vertical;
    }
`;

export default StyledCard;
