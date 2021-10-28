import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)`
    border: 1px solid ${ ( { theme } ) =>  theme.vars.primary };
    border-radius: 12px;
    flex-shrink: 0;
`
const ProgressValue = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${ ( { theme } ) =>  theme.vars.primary };
    margin-left: 8px;
`

export default function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <Box sx={{ width: '100%', mr: 1, }}>
                <BorderLinearProgress variant="determinate" {...props} sx={ { height: '5px', backgroundColor: 'transparent', } } />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <ProgressValue >{props.value}%</ProgressValue>
            </Box>
        </Box>
    );
}