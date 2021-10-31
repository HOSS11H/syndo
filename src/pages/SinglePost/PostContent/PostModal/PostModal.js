import { useState } from 'react';
import styled from 'styled-components';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Grid } from '@mui/material';
import TabPanel from '../../../../components/UI/TabPanel/TabPanel';
import Step from '@mui/material/Step';

import { CustomStepper , CustomStepLabel } from '../../../../components/UI/Stepper/Stepper';
import ModalSlider from '../../../../components/UI/Slider/Slider';
import ModalCheckBox from '../../../../components/UI/Checkbox/Checkbox';
import ModalButton from '../../../../components/UI/Button/Button';


import useForm from '../../../../hooks/useForm';
import { investmentForm } from '../../../../utils/formConfig';

const ModalBackdrop = styled(Backdrop)`
    &.MuiBackdrop-root {
        background-color: transparent;
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
const FormHeading = styled.h3`
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: ${ ( { margin }  ) => margin };
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    margin-bottom: 32px;
    @media screen and (max-width: 899.98px) {
        text-align: center;
    }
`
const BlockInfo = styled.div`
    margin-bottom: ${ ( { marginBottom } ) => marginBottom };
    h3 {
        font-size: 11px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: ${ ( { labelMargin } ) => labelMargin };
    }
    p {
        font-size: 12px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 0;
    }
    h4 {
        font-size: 11px;
        font-weight: 600;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 0;
    }
`
const InputsWrapper= styled.div`
    margin-top: 10px;
`
const SliderRangeValues = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateY(-6px);
    margin-bottom: -6px;
    span {
        font-size: 12px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
    }
`
const ModalError = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${ ( { theme } ) => theme.palette.error.main  };
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
    margin-bottom: 0;
`
const ModalActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

// Steps Object
const steps = [
    {
        label: 'investment',
    },
    {
        label: 'pay',
    },
]
// User Info Object
const userInfos = {
    balance: 50000,
}

// Slide Range Utilities
function valueText(value) {
    let convertedValue = value*1000;
    if (convertedValue > 1000) {
        convertedValue = `${convertedValue / 1000}K`
    }
    return `${convertedValue} EGP`;
}


const PostModal = ( props ) => {

    const { show, closeModal } = props;

    const { renderFormInputs: UserData , isFormValid: isUserDataValid , form: investFormData} = useForm(investmentForm);


    const [ activeStep , setActiveStep ] = useState(0);

    const [ investmentValue , setInvestmentValue ] = useState([ 0.5, 100 ]); 

    const [ agreedTerms, setAgreedTerms ] = useState(false);

    const [ agreedTermsError , setAgreedTermsError ] = useState(false);

    const agreedTermsHandler = ( e ) => {
        setAgreedTerms(e.target.checked)
        setAgreedTermsError(!e.target.checked)
    };


    const handleNextStep = () => {
        if ( activeStep === 0 ) {
            agreedTerms ? setActiveStep((prevActiveStep) => prevActiveStep + 1 ) : setAgreedTermsError(true)  ;
        } else {
            return;
        }
    };

    const handleStepBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepReset = () => {
        setActiveStep(0);
    };

    const handleInvestmentSliderChange = (event, newValue) => {
        setInvestmentValue(newValue);
    };

    const ResetCloseModalHandler = () => {
        handleStepReset()
        closeModal()
    }

    const loadedSteps = steps.map((step, index) => (
        <Step key={step.label}>
            <CustomStepLabel >
                {step.label}
            </CustomStepLabel>
        </Step>
    ) )



    return (
        <Modal open={show} onClose={closeModal} 
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
                        </Grid>
                        <Grid item md={5}>
                            <FormHeading>investment request</FormHeading>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={2}>
                            <CustomStepper activeStep={activeStep} orientation="vertical" >
                                {loadedSteps}
                            </CustomStepper>
                        </Grid>
                        <Grid item md={5}>
                            <TabPanel value={activeStep} index={0}>
                                <BlockInfo marginBottom={'14px'} labelMargin={'6px'}>
                                    <h3>current avaiable balance</h3>
                                    <p>{ (userInfos.balance / 1000).toFixed(3) } EGP</p>
                                </BlockInfo>
                                <BlockInfo marginBottom={'18px'} labelMargin={'4px'}>
                                    <h3>amount (required)</h3>
                                    <ModalSlider
                                        size="small"
                                        step={0.5}
                                        getAriaLabel={() => 'Minimum amount'}
                                        value={investmentValue}
                                        onChange={handleInvestmentSliderChange}
                                        valueLabelDisplay="off"
                                        disableSwap= {true}
                                    />
                                    <SliderRangeValues>
                                        <span>{ valueText(investmentValue[0]) }</span>
                                        <span>{ valueText(investmentValue[1]) }</span>
                                    </SliderRangeValues>
                                </BlockInfo>
                                <BlockInfo marginBottom={'20px'} labelMargin={'10px'}>
                                    <h3>expected ROI</h3>
                                    <p>{ valueText(investmentValue[0] / 5 ) }</p>
                                </BlockInfo>
                                <BlockInfo marginBottom={'14px'} labelMargin={'10px'}>
                                    <h3>risk disclaimer</h3>
                                    <h4>Lorem Ipsum Dolor is the most dummy standard text ever Sit Amet Consectetur Da Ecperm Elit. Iure Adipisci Nihil Standard Dummy Text Ever Fugerspiciatis Collapsing 1500s.</h4>
                                </BlockInfo>
                                <ModalCheckBox checked={agreedTerms} handleChange={agreedTermsHandler}  label={
                                    <>
                                        By clicking <b>Next</b> you agree to syndo's <b>terms</b>
                                    </>
                                } />
                                { agreedTermsError && ( <ModalError>please Check this</ModalError>) }
                            </TabPanel>
                            <TabPanel value={activeStep} index={1}>
                                <BlockInfo marginBottom={'11px'} labelMargin={'6px'}>
                                    <h3>investment amount</h3>
                                    <p>{ valueText(investmentValue[0]  ) }</p>
                                </BlockInfo>
                                <BlockInfo marginBottom={'14px'}>
                                    <h4>Please enter your card details to secure your investment.Cash will only be deducted on campaign completion.</h4>
                                    <InputsWrapper>
                                        { UserData() }
                                    </InputsWrapper>
                                </BlockInfo>
                                
                            </TabPanel>
                        </Grid>
                    </Grid>
                        {activeStep === 0 && (
                            <div>
                                <ModalActions>
                                    <ModalButton variant="text" onClick={closeModal}>cancel</ModalButton>
                                    <ModalButton variant='contained' onClick={handleNextStep} width='80px' >next</ModalButton>
                                </ModalActions>
                            </div>
                        )}
                </InvestForm>
            </Fade>

        </Modal>
    )
}
export default PostModal;