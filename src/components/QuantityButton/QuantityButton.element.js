import styled from 'styled-components';

export const QuantityWrapper = styled.div`
display: flex;
margin: 5px;
height: 30px;
align-items: center;
`;

export const QuantityButtonStyle = styled.button`
border-radius: 50%;
background: #141414;
width: 30px;
height: 30px;
white-space: nowrap;
padding: 5px;
margin: 5px;
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #ff4500;
}
`
