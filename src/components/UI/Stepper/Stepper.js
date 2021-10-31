import styled from 'styled-components';

import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

const ModalStepper = styled(Stepper)`
    & .MuiStepConnector-root {
        margin-left: 8px;
        & .MuiStepConnector-line {
            border-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        }
    }
`
const ModalStepLabel = styled(StepLabel)`
    &.MuiStepLabel-root {
        padding: 0;
    }
    & .MuiStepLabel-iconContainer {
        padding-right: 10px;
        & .MuiSvgIcon-root {
            width:14px;
            height:14px;
            background-color: transparent;
            border: 1px solid ;
            border-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
            border-radius: 50%;
            color: transparent;
            &.Mui-active {
                color: ${ ( { theme } ) =>  theme.vars.black };
            }
            & .MuiStepIcon-text {
                display: none;
            }
        }
    }
    & .MuiStepLabel-label {
        font-size: 12px;
        text-transform: capitalize;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        &.Mui-active {
            color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
            font-weight: 700;
        }
    }
`

export const  CustomStepper = props => {
    return (
        <ModalStepper {...props} >
            {props.children}
        </ModalStepper>
    )
}

export const CustomStepLabel = props => {
    return (
        <ModalStepLabel {...props}>
            {props.children}
        </ModalStepLabel>
    )
}