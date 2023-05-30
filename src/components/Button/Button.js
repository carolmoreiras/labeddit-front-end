import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  width: 100%;
  border-radius: ${props => props.fullRadius ? '27px' : '4px'};
  padding: 12px;
  background: ${props => props.filled ? 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)' : 'white' };
  color: ${props => props.filled ? 'white' : '#FE7E02' };
  border: ${props => props.filled ? 'none' : '1px solid #FE7E02' };
  font-family: 'Noto Sans';
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
`
