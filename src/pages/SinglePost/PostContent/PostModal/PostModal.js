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
import PostSummary from './PostSummary/PostSummary';

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
    min-height: 500px;
    max-width: 900px;
    padding: 65px 65px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    a {
        font-size: 12px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 0;
        text-decoration: underline;
    }
`
const Note = styled.div`
    p {
        font-size: 11px;
        font-weight: 600;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        margin-bottom: 0;
        a {
            color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
            text-decoration: underline;
        }
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
const ErrorMessage = styled.p`
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

    const { renderFormInputs: UserData , isFormValid: isUserDataValid, form: userDataValues } = useForm(investmentForm);

    const [ investRequestData, setInvestRequestData ] = useState(null);

    const [ activeStep , setActiveStep ] = useState(0);

    const [ investmentValue , setInvestmentValue ] = useState([ 0.5, 100 ]); 

    const [ agreedTerms, setAgreedTerms ] = useState(false);

    const [ agreedTermsError , setAgreedTermsError ] = useState(false);

    const [ agreedInvestment, setAgreedInvestment ] = useState(false);

    const [ agreedInvestmentError , setAgreedInvestmentError ] = useState(false);

    const [ userDataError , setUserDataError ] = useState(null);

    const agreedTermsHandler = ( e ) => {
        setAgreedTerms(e.target.checked);
        setAgreedTermsError(!e.target.checked);
    };

    const agreedInvestmentHandler = ( e ) => {
        setAgreedInvestment(e.target.checked)
        setAgreedInvestmentError(!e.target.checked)
    };

    const submitInvestHandler = ( e ) => {
        const userData = {
            name: userDataValues.name.value,
            cardNum: userDataValues.cardNumber.value,
            investmentRef: `#${Math.random().toString().slice(2, -1)}`,
            post: props.fetchedPost.title,
        }
        setInvestRequestData(userData)
    }

    const handleNextStep = () => {
        if ( activeStep === 0 ) {
            agreedTerms ? setActiveStep((prevActiveStep) => prevActiveStep + 1 ) : setAgreedTermsError(true) ;
        } else if ( activeStep === 1 ) {
            if (!isUserDataValid()) {
                setUserDataError(true);
                return;
            }
            if (!agreedInvestment) {
                setAgreedInvestmentError(true);
                return;
            }
            if (  agreedInvestment && isUserDataValid( ) ) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
                submitInvestHandler();
                return ;
            }
        } else {
            return;
        }
    };

    const handleStepBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInvestmentSliderChange = (event, newValue) => {
        setInvestmentValue(newValue);
    };

    const ResetCloseModalHandler = () => {
        setActiveStep(0);
        closeModal();
        setInvestRequestData(null)
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
            <Fade in={show} onExited={closeModal}>
                <InvestForm>
                    <Grid container>
                        { ( activeStep === 0 || activeStep ===1 ) && (
                            <>
                                <Grid item md={2}>
                                </Grid>
                                <Grid item md={5}>
                                    <FormHeading>investment request</FormHeading>
                                </Grid>
                            </>
                        )}
                        { activeStep === 2 && (
                            <>
                                <Grid item md={4}>
                                </Grid>
                                <Grid item md={4}>
                                    <FormHeading>thank you</FormHeading>
                                </Grid>
                            </>
                        )}
                    </Grid>

                    <Grid container>
                        { ( activeStep === 0 || activeStep ===1 ) && (
                            <>
                                <Grid item md={2}>
                                        <CustomStepper activeStep={activeStep} orientation="vertical" >
                                            {loadedSteps}
                                        </CustomStepper>
                                </Grid>
                                <Grid item md={5}>
                                    <>
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
                                            <BlockInfo marginBottom={'23px'} labelMargin={'10px'}>
                                                <h3>risk disclaimer</h3>
                                                <h4>Lorem Ipsum Dolor is the most dummy standard text ever Sit Amet Consectetur Da Ecperm Elit. Iure Adipisci Nihil Standard Dummy Text Ever Fugerspiciatis Collapsing 1500s.</h4>
                                            </BlockInfo>
                                            <ModalCheckBox error={agreedTermsError} checked={agreedTerms} handleChange={agreedTermsHandler}  label={
                                                <>
                                                    By clicking <b>Next</b> you agree to syndo's <b>terms</b>
                                                </>
                                            } />
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
                                                    {userDataError && <ErrorMessage>Please Check Your data</ErrorMessage>}
                                                </InputsWrapper>
                                            </BlockInfo>
                                            <ModalCheckBox label={'Save card for future investments'} />
                                            <ModalCheckBox error={agreedInvestmentError} checked={agreedInvestment} handleChange={agreedInvestmentHandler}  label={
                                                <>
                                                    By clicking <b>Invest</b> you agree to syndo's <b>terms</b>
                                                </>
                                            } />
                                        </TabPanel>
                                    </>
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={4}>
                                    <PostSummary postInfo={props.fetchedPost} />
                                </Grid>
                            </>
                        )}
                        { activeStep === 2 && (
                            <>
                                <Grid item md={4}>
                                </Grid>
                                <Grid item md={4}>
                                    <BlockInfo labelMargin='6px' marginBottom='19px'>
                                        <h4>your investment request is created successfully</h4>
                                    </BlockInfo>
                                    <BlockInfo labelMargin='6px' marginBottom='19px'>
                                        <h3>investment ref</h3>
                                        <p>{investRequestData.investmentRef}</p>
                                    </BlockInfo>
                                    <BlockInfo labelMargin='6px' marginBottom='19px'>
                                        <h3>investment amount</h3>
                                        <p>{ valueText(investmentValue[0]  ) }</p>
                                    </BlockInfo>
                                    <BlockInfo labelMargin='6px' marginBottom='19px'>
                                        <h3>post</h3>
                                        <p>{investRequestData.post}</p>
                                    </BlockInfo>
                                    <BlockInfo labelMargin='6px' marginBottom='19px'>
                                        <h3>investments agreements</h3>
                                        <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(investRequestData) ) } ` } download='agreement.json'>Download here</a>
                                    </BlockInfo>
                                    <Note>
                                        <p>Investment amount will be deducted automatically on post completion, you can cancel your investment before completion from <a href="https:///">here</a></p>
                                    </Note>
                                </Grid>
                            </>
                        )}
                    </Grid>
                    {activeStep === 0 && (
                        <>
                            <ModalActions>
                                <ModalButton variant="text" onClick={closeModal}>cancel</ModalButton>
                                <ModalButton variant='contained' onClick={handleNextStep} width='80px' >next</ModalButton>
                            </ModalActions>
                        </>
                    )}
                    {activeStep === 1 && (
                        <>
                            <ModalActions>
                                <ModalButton variant="text" onClick={handleStepBack}>back</ModalButton>
                                <ModalButton variant='contained' onClick={handleNextStep} width='100px' >invest { valueText(investmentValue[0]  ) }</ModalButton>
                            </ModalActions>
                        </>
                    )}
                    {activeStep === 2 && (
                        <>
                            <ModalActions>
                                <ModalButton variant='contained' onClick={ResetCloseModalHandler} width='100px' >close</ModalButton>
                            </ModalActions>
                        </>
                    )}
                </InvestForm>
            </Fade>

        </Modal>
    )
}
export default PostModal;