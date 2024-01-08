import styled from "styled-components";

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
  display: grid;
  margin: 10px auto;
  width: 40%;
  grid-gap: 16px;
  @media screen and (max-width: 960px) {
    width: 90%;
  }
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
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  grid-gap: 8px;
`;

export const TotalLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TotalValue = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #fca311;
  width: 120px;
  margin: auto;
  color: #fff;
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
  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const OrderListLi = styled.li`
  margin: 5px 20px;
`;