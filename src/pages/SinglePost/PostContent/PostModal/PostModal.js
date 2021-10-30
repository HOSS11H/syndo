import styled from 'styled-components';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Grid } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';

const ModalBackdrop = styled(Backdrop)`
    &.MuiBackdrop-root {
        background-color: transparent;
    }
`
const ModalStepper = styled(Stepper)`
    & .MuiStepConnector-root {
        margin-left: 8px;
        & .MuiStepConnector-line {
            border-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        }
    }
`
const ModalStep = styled(Step)`
    
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

const InvestForm = styled.div`
    position: absolute;
    top: 50%;
    left:50%;
    width: 100%;
    height: 500px;
    max-width: 900px;
    padding: 65px 65px 60px;
    transform: translate(-50%, -50%);
    background-color:  ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.common.white };
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    z-index: 5;
`
const steps = [
    {
        label: 'investment',
    },
    {
        label: 'pay',
    },
]

const PostModal = ( props ) => {

    const { show, close } = props;

    const [ activeStep , setActiveStep ] = useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const loadedSteps = steps.map((step, index) => (
        <ModalStep key={step.label}>
            <ModalStepLabel  >
                {step.label}
            </ModalStepLabel>
        </ModalStep>
    ) )



    return (
        <Modal open={show} onClose={close} 
            aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={ModalBackdrop}
            BackdropProps={ {
                    timeout: 500,
                } }
            >
            <Fade in={show}>
                <InvestForm>
                    <Grid container>
                        <Grid item md={2}>
                            <ModalStepper activeStep={activeStep} orientation="vertical" >
                                {loadedSteps}
                            </ModalStepper>
                        </Grid>
                        <Grid item md={5}>
                            {activeStep === 2 && (
                                <div>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </InvestForm>
            </Fade>

        </Modal>
    )
}
export default PostModal;