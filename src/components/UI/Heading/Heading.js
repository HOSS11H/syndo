import styled from 'styled-components';

const Heading = styled.h3`
    font-size: 34px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: ${ ( { margin }  ) => margin };
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    @media screen and (max-width: 899.98px) {
        text-align: center;
    }
    @media screen and (max-width: 767.98px) {
        font-size: 32px
    }
`
export default Heading;