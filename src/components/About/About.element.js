import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    color: #fff;
    padding: 50px;
    justify-items: center;
`;

export const AboutPre = styled.pre`
    width: 100%;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const AboutImg = styled.img`
    display: flex;
    width: 50%;
    max-width: 600px;
    margin: 20px auto;
`;

export const AboutHeading = styled.h1`
    margin: 30px auto;
    text-align: center;
    font-size: 3rem;
`;

export const AboutFacts = styled.ul`
    margin: auto;
    max-width: 600px;
`;

export const AboutList = styled.li`
    margin-bottom: 20px;
    font-size: 1.5rem;
`;

export const AboutButtonContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
`