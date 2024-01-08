import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartIconWrapper = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f5a623;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;
  bottom: 42px;
  left: 30px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;