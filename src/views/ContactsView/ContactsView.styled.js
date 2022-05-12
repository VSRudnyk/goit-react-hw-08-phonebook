import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Form = styled.form`
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 15px;
`;

export const Input = styled.input`
  width: 150px;
  margin-bottom: 15px;
`;

export const Submit = styled.button`
  width: 100px;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
`;
