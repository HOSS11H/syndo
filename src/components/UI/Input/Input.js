import styled from "styled-components";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px;
    text-align: left;
`

const ErrorMessage = styled.label`
    margin-top: 3px;
    color: #DF1338;
    text-transform: capitalize;
`

const Input = ( props ) => {

    const {
        label,
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value,
        options,
    } = props;

    return (
        <InputContainer>
            {
                type === 'text' &&
                    <TextField id={name} label={label} variant="outlined" 
                        type={type} name={name} value={value} onChange={handleChange}
                    />
            }
            {
                type === 'password' &&
                    <TextField id={name} label={label} variant="outlined" 
                        type={type} name={name} value={value} onChange={handleChange}
                    />
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
            {errorMessage && !isValid && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
        </InputContainer>
    )
}

export default Input