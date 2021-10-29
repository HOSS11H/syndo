import { styled } from '@mui/material/styles';
import LinearProgress , { linearProgressClasses  } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';


const BorderLinearProgress = styled(LinearProgress)(({ primary }) => ({
    height: 7,
    borderRadius: 12,
    border: '1px solid #000',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'transparent',
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: primary,
    },
}));

export default function LinearProgressWithLabel(props) {
    const themeCtx = useContext(ThemeContext);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '7px' }}>
            <Box sx={{ width: '100%', mr: 1, }}>
                <BorderLinearProgress variant="determinate" {...props} primary={`${themeCtx.theme.vars.primary}`} sx={ { borderColor: `${themeCtx.theme.vars.primary}`,  } } />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="caption" display="block" sx={ {fontSize: '12px', fontWeight: '500', color: `${themeCtx.theme.vars.primary}`, marginLeft: '8px',} } >{props.value}%</Typography>
            </Box>
        </Box>
    );
}