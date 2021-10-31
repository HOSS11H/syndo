import styled from 'styled-components';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)`
    &.MuiButton-root {
        margin-right: 5px;
        &:last-child {
            margin-right: 0;
        }
    }
    &.MuiButton-text {
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        font-size: 11px;
        font-weight: 900;
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
    }
    &.MuiButton-contained {
        min-width: ${ ( { width } ) => width };
        padding: 0 10px;
        height: 30px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: ${ ( { theme } ) => theme.vars.primary  };
        color: ${ ( { theme } ) => theme.vars.white };
        font-size: 11px;
        font-weight: 500;
        border:0;
        outline: none;
        cursor: pointer;
        border-radius: 6px;
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        box-shadow: none;
    }
`

const ModalButton = props => {

    return (
        <CustomButton {...props} >{props.children}</CustomButton>
    )
}
export default ModalButton;