import styled from "@emotion/styled";

export const ErrorWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  border: 1px solid red;
  padding: 12px;
`;

export const ErrorTitle = styled.h3`
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
`;