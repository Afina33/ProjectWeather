import styled from "@emotion/styled";

export const ErrorWrapper = styled.div`
  max-width: fit-content;
  min-width: 709px;
  min-height: 220px;
  max-height: fit-content;
  display: flex;
  background: linear-gradient(to right, rgba(47, 72, 111, 0.5), rgba(11, 27, 52, 0.5));
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 27px 36px;
  gap: 31px;
  color: white;
  align-items: center;
  flex-direction: column;
`;

export const WrapperErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

export const ErrorTitle = styled.h3`
  font-size: 57px;
  color: #F35E5E;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  
`;

export const DeleteButton = styled.div`
  width: 155px;
`;