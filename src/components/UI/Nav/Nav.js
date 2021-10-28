import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NextButtonWrapper = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    padding: 0;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    background-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(149, 149, 149, 0.25)'  };
    cursor: pointer;
`
export const NextButton = props => {

    return (
        <NextButtonWrapper>
            <ChevronRightIcon />
        </NextButtonWrapper>
    )
}