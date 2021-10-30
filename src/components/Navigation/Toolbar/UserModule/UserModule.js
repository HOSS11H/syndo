import { useContext } from 'react';
import styled from 'styled-components';
import UserImg from '../../../../images/user/user.png'
import AuthContext from '../../../../store/auth-context';

const UserModuleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
`
const UserImage= styled.div`
    height: 30px;
    width: 30px;
    border-radius:50%;
    margin-left: 5px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ModuleContent = styled.div`
    display: flex;
    flex-direction: column;
`
const UserName = styled.h3`
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
`
const UserLogout = styled.a`
    font-size: 11px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 0;
    color: #999;
    cursor: pointer;
`


const UserModule = props => {

    const authCtx = useContext(AuthContext);

    const userLogoutHandler = ( e ) => {
        e.preventDefault();
        authCtx.logout()
    }

    return (
        <UserModuleWrapper>
            <ModuleContent>
                <UserName>jane doe</UserName>
                <UserLogout onClick={userLogoutHandler}>logout</UserLogout>
            </ModuleContent>
            <UserImage>
                <img src={UserImg} alt="User"/>
            </UserImage>
        </UserModuleWrapper>
    )
}
export default UserModule;