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
  width: 290px;
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
  display: flex;
  flex-direction: column;
`;

export const TotalLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0px;
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
  margin: 0;
  max-width: none;
  width: 100%;
  color: white;
`;

export const SectionDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text3XL = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
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