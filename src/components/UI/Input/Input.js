import styled from "styled-components";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


const CustomLabel = styled(FormLabel)`
    &.MuiFormLabel-root {
        font-size: 11px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        margin-bottom: 6px;
    }
`
const CustomInput = styled(Input)`
    &.MuiInput-root {
        font-size: 12px;
        font-weight: 700;
        text-transform: capitalize;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        &::before , &::after {
            content: unset;
        }
    }
    & .MuiInput-input {
        height: 30px;
        border: 1px solid;
        border-color:  ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 4px;
    }
`


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 7px;
    text-align: left;
`

const ErrorMessage = styled.label`
    font-size: 12px;
    margin-top: 3px;
    color: #DF1338;
    text-transform: capitalize;
`

const ModalInput = ( props ) => {

    const {
        label,
        type,
        name,
        placeholder,
        handleChange,
        errorMessage,
        isValid,
        value,
        options,
    } = props;

    return (
        <InputContainer>
            {
                type === 'text' &&(
                    <>
                        <CustomLabel >{label}</CustomLabel>
                        <CustomInput id={name} placeholder={placeholder} 
                            type={type} name={name} value={value} onChange={handleChange}
                            />
                    </>
                )
            }
            {
                type === 'password' &&(
                    <>
                        <CustomLabel >{label}</CustomLabel>
                        <CustomInput id={name} placeholder={placeholder}
                            type={type} name={name} value={value} onChange={handleChange}
                        />
                    </>
                )
            }
            {
                type === 'select' &&
                    <TextField
                        id={name}
                        select
                        name={name}
                        label={label}
                        value={value}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
            }
            {
                type === 'date' &&(
                    <>
                        <CustomLabel >{label}</CustomLabel>
                        <CustomInput id={name} placeholder={placeholder} 
                            type={type} name={name} value={value} onChange={handleChange}
                            />
                    </>
                )
            }
            {errorMessage && !isValid && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
        </InputContainer>
    )
}

export default ModalInput