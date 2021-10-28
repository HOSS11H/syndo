import styled from 'styled-components';

const ClientWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 50px;
    background-color: ${ ( { theme } ) => theme.palette.common.white   };
    box-shadow: 0 5px 30px rgba(100, 100, 100, 0.2);
    display: flex;
    align-items: center;
    justify-content:center;
    height: 120px;
    @media screen and (max-width: 900px) {
        max-width: 370px;
        margin: 0 auto 50px;
    }
    img {
        width: 65%;
        object-fit: cover;
    }
`

const Client = props => {
    return (
        <ClientWrapper>
            <img src={props.img} alt="" />
        </ClientWrapper>
    )
}
export default Client;