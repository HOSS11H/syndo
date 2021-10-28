import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext({
    mode: 'dark',
    toggleMode: ( ) => { },
    theme: null,
})

export const ThemeContextProvider = props => {

    const [ mode, setMode ] = useState('dark');

    // PAssing It With With React Memo
    const toggleModeHandler = ( ( ) => {
        setMode( prevState => (prevState === 'light' ? 'dark' : 'light') );
    } )
    
    const theme = React.useMemo(
        ( ) =>
            createTheme({
                vars: {
                    primary: '#00acb1',
                    black: '#000000',
                    white: '#f4f4f4',
                },
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    

    const contextValue = {
        mode: mode,
        toggleMode: toggleModeHandler,
        theme: theme,
    }
    // We Use Styled Componet To Pass The Theme
    // We Pass The Theme Through The Context To Access It In Our Components
    // We Use Styled Engin To Customize MUI Components

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContext