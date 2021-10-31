import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const CustomSlider = styled(Slider)`
    &.MuiSlider-root {
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        padding-bottom: 0;
    }
    & .MuiSlider-thumb {
        width: 5px;
        height: 10px;
        border-radius: 4px;
        border:1px solid;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.black : theme.vars.white };;
        border-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        &:nth-child(3) {
            color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        }
    }
`

const ModalSlider = props => {
    return (
        <CustomSlider {...props} />
    )
}
export default ModalSlider;