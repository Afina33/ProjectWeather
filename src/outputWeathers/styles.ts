import styled from "@emotion/styled"


export  const OutputWeathersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const WeatherCard = styled.div`
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
`

export const WrapperButtonDeleteAll = styled.div`
width: 100%;
`