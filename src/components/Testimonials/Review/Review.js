import styled from 'styled-components';

const ReviewWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
    padding: 46px 40px 25px;
    background-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? 'rgba(100, 100, 100, 0.2)' : 'rgba(149, 149, 149, 0.25)'  };
    @media screen and (max-width: 900px) {
        max-width: 370px;
        margin: 0 auto 30px;
    }
`
const ReviewDesc = styled.p`
    font-size: 21px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 32px;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
`
const ReviewAuthor = styled.div`
    display: flex;
    align-items: center;
`
const AuthorImage= styled.img`
    height: 40px;
    width: 40px;
    border-radius:50%;
    margin-right: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ReviewAuthorContent = styled.div`
    display: flex;
    flex-direction: column;
`
const AuthorName = styled.h3`
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 2px;
    color: ${ ( { theme } ) =>  theme.vars.white };
`
const AuthorTitle = styled.h3`
    font-size: 11px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0;
    color: #999;
`

const Review = props => {

    return (
        <ReviewWrapper>
            <ReviewDesc>{props.desc}</ReviewDesc>
            <ReviewAuthor>
                <AuthorImage src={props.img} />
                <ReviewAuthorContent>
                    <AuthorName>{props.name}</AuthorName>
                    <AuthorTitle>{props.company} - {props.title}</AuthorTitle>
                </ReviewAuthorContent>
            </ReviewAuthor>
        </ReviewWrapper>
    )
}
export default Review;