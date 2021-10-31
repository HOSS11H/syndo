import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../../../store/auth-context';
import ThemeContext from '../../../store/theme-context';
import LinearProgressWithLabel from '../../UI/LinearProgress/LinearProgress';


const PostWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
    @media screen and (max-width: 900px) {
        max-width: 370px;
        margin: 0 auto 30px;
    }
`
const PostLink = styled.a`
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    width:100%;
    height: 100%;
    cursor: pointer;
    z-index:5;
`
const PostImageWrapper = styled.div`
    position: relative;
    background-color: #e3e3e3;
    height: 150px;
`
const PostImage= styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const PostClass= styled.span`
    position: absolute;
    left: 8px;
    top: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    text-transform:capitalize;
    background-color: ${ ( { theme } ) =>  theme.vars.white };
    color: ${ ( { theme } ) =>  theme.vars.black };
`

const PostContentWrapper = styled.div`
    position: relative;
    border-radius: 0 0 8px 8px;
    border: 1px solid #eaeaea;
    border-top: 0;
    padding: 15px 12px 9px;
    background-color: ${ ( { theme } ) => theme.palette.common.white};
`
const PostContentHead = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom: 5px;
`
const PostTitle = styled.h3`
    font-size: 13px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0;
    color: ${ ( { theme } ) =>  theme.vars.black };
`
const PostDate = styled.p`
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 0;
    color: #333;
`
const PostDesc = styled.p`
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #555;
`
const PostInfos = styled.table`
    font-size: 12px;
    font-weight: 400;
    color: ${ ( { theme } ) =>  theme.vars.black };
    tr {
        &:nth-child(even) {
            font-weight: 500;
        }
        td {
            padding: 0 4px;
            padding-bottom: 6px;
        }
        &:last-child {
            td {
                padding-bottom: 15px;
            }
        }
    }
`


const PostTags = styled.div`
    display: flex;
    align-items: center;
`
const Tag = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 17px;
    border-radius: 8px;
    background-color: #e3e3e3;
    font-size: 11px;
    font-weight: 500;
    text-transform: capitalize;
    color: ${ ( { theme } ) =>  theme.vars.black };
    margin-right: 4px;
    &:last-child {
        margin-right:0;
    }
`

const Post = ( props ) => {

    const history = useHistory();

    const onPostClickHandler= ( e ) => {
        history.push(`/posts/${props.id}`);
    }

    const loadedTags = props.tags.map( ( tag , index ) => {
        return <Tag key={index}>{tag}</Tag>
    })

    return (
        <PostWrapper>
            <PostLink onClick={onPostClickHandler.bind(null, props.id)} />
            <PostImageWrapper>
                <PostImage src={ props.img}/>
                <PostClass>{props.postClass}</PostClass>
            </PostImageWrapper>
            <PostContentWrapper>
                <PostContentHead>
                    <PostTitle>{props.title}</PostTitle>
                    <PostDate>till: {props.endDate}</PostDate>
                </PostContentHead>
                <PostDesc>{props.desc}</PostDesc>
                <LinearProgressWithLabel value={ props.progress} />
                <PostInfos>
                    <tbody>
                        <tr>
                            <td>Funding Goal</td>
                            <td>Interest</td>
                            <td>Tenor</td>
                        </tr>
                        <tr>
                            <td>{props.infos.goal}</td>
                            <td>{props.infos.rate}</td>
                            <td>{props.infos.tenor}</td>
                        </tr>
                        <tr>
                            <td>Total invested</td>
                            <td>Investors</td>
                            <td>Skin in the game</td>
                        </tr>
                        <tr>
                            <td>EGP{props.infos.invested}</td>
                            <td>{props.infos.investors}</td>
                            <td>{props.infos.skin}</td>
                        </tr>
                    </tbody>
                </PostInfos>
                <PostTags>
                    {loadedTags}
                </PostTags>
            </PostContentWrapper>
        </PostWrapper>
    )
}
export default Post;