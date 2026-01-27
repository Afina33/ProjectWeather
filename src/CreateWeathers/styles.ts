import styled from "@emotion/styled";

export const FormStyle = styled.form`
  display: flex;
 justify-content: center;
 flex-direction: column;
 gap: 120px

`;

export const InputContainer = styled.div`
display: flex;
gap: 14px;
justify-content: center;
`;

export const ButtonStyle = styled.div`
display: flex;
width: 146px;
`;

export const OutputDiv = styled.div`
  max-width: fit-content;
  min-width: 709px;
  min-height: 220px;
  max-height: fit-content;
  display: flex;
  background: linear-gradient(to right, rgba(47, 72, 111, 0.5), rgba(11, 27, 52, 0.5));
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: 27px 36px;
  gap: 42px;
  color: white;
  align-items: center;
  flex-direction: column;
`;

export const DivWrapper = styled.div`
  display: flex;
  gap: 165px
`;

export const CityName = styled.p`
  font-size: 20px;
  font-weight: 700;
`; 

export const CelsiusTeitel = styled.p`
  font-size: 57px;
  font-weight: 500;
`;

export const CityCelsiusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const GetImg = styled.img`
  width: 150px;
  height: 100px;
`;

export const ImgWapper = styled.div`
  width: 290px;
  height: 74px;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 95px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`


`

export const WidthButton = styled.div`
  width: 155px;
`;
