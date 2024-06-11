import styled, {keyframes} from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const CheckoutTitle = styled.h1`
  margin: 10px auto;
  font-size: 4rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 290px;
  grid-gap: 16px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const FormTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const TotalLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px 10px auto;
`;

export const TotalValue = styled.span`
  font-weight: 100;
  margin-left: 10px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #fca311;
  width: 120px;
  margin: 0 auto 50px;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fb923c;
  }
`;

export const OrderComplete = styled.div`
  margin: auto;
  font-weight: bold;
  font-size: 1.2rem;
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const OrderCompleteH1 = styled.h1`
  font-size: 2rem;
  margin: 40px 0 0;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const OrderListUl = styled.ul`
  margin: 5px;
  font-size: 1.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 400px;
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const OrderListLi = styled.li`
  margin: 5px 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  max-width: none;
  width: 100%;
  color: white;
  @media screen and (max-width:960px){
    flex-direction: column;
  }
`;

export const OrderCell = styled.div`
`;

export const OrderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  max-width: none;
  width: 100%;
  color: white;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  color: white;
`;

export const SectionDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:1100px){
    width: 100%;
  }
`;

export const Text3XL = styled.h3`
  font-size: 2rem;
  margin: 20px 0;
`;

export const TextBold = styled.div`
  font-weight: bold;
`;

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  background-color: #fb923c;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;

  &:hover {
    background-color: #fca311;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #a40606;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
`;

export const PaymentLoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PaymentSuccessDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: white;
margin-top: 20px;
`;

export const SuccessTitle = styled.h4`
margin: 10px auto;
font-size: 2rem;
`;

export const SuccessText = styled.h5`
font-size: 1rem;
margin: 20px 0;
`;