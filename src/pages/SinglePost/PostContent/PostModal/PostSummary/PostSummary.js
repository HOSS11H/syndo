import styled from 'styled-components';

const PostWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    padding: 40px 35px 35px;
    background-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.black : '#eaeaea'  };
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    @media screen and (max-width: 900px) {
        max-width: 370px;
        margin: 50px auto 0;
    }
    h3 {
        font-size: 13px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 13px;
        text-align: center;
    }
`
const PostContent = styled.div`
    margin-bottom: 11px;
    h4 {
        font-size: 12px;
        font-weight: 500;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        margin-bottom: 7px;
    }
    p {
        font-size: 12px;
        font-weight: 900;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        margin-bottom: 0px;
        text-transform: capitalize;
    }
`


const PostSummary = (props) => {

    const { postInfo } = props;

    return (
        <PostWrapper>
            <h3>Post summary</h3>
            <PostContent>
                <h4>Post</h4>
                <p>{postInfo.title}</p>
            </PostContent>
            <PostContent>
                <h4>Tenor</h4>
                <p>{postInfo.infos.tenor}</p>
            </PostContent>
            <PostContent>
                <h4>Total raised</h4>
                <p>{postInfo.infos.invested} EGP ({ ( postInfo.infos.invested /  postInfo.infos.goal ) * 100 }%) of {postInfo.infos.goal} EGP</p>
            </PostContent>
            <PostContent>
                <h4>Expected Net ROI</h4>
                <p>{postInfo.infos.skin}</p>
            </PostContent>
        </PostWrapper>
    )
}
export default PostSummary