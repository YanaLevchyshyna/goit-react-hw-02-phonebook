import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
`;

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelName = styled.label`
  margin-bottom: 30px;
  display: block;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
`;

export const InputName = styled.input`
  margin-top: 10px;
  display: block;
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
`;

export const AddContactButton = styled.button`
  width: 120px;
  font-size: 13px;
  padding: 8px 14px;
  border: 1px solid #cecece;
  background-color: #f6f6f6;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: inset 0px 20px 20px #ffffff;
`;
