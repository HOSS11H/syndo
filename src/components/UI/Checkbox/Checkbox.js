import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CustomLabel = styled(FormControlLabel)`
    margin-right: 0;
    & .MuiTypography-root {
        font-size: 11px;
        font-weight: 400;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
    }
`
const CustomCheckbox = styled(Checkbox)`
    &.MuiCheckbox-root {
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        border-radius: 4px;
        &.Mui-checked {
            color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.primary : theme.palette.common.white };
            & .MuiSvgIcon-root {
                color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.primary : theme.vars.black }
            }
        }
    }
`

const ModalCheckBox =props => {

    return (
        <CustomLabel control={<CustomCheckbox checked={props.checked} onChange={props.handleChange} />} label={props.label} />
    )
}
export default ModalCheckBox;