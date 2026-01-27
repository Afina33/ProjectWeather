import styled from "styled-components";

/* HEADER */
export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 10px 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
              linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid #D2D2D2;
  backdrop-filter: blur(18px);
  color: #fff;
`;

export const NavLink = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
`;

/* MAIN */
export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

/* SEARCH */
export const SearchBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const SearchInput = styled.input`
  width: 550px;
  height: 48px;
  border-radius: 40px;
  border: 1px solid #fff;
  padding: 12px 20px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background: transparent;
  backdrop-filter: blur(16px);
`;

export const SearchButton = styled.button`
  width: 146px;
  height: 40px;
  border-radius: 50px;
  border: none;
  padding: 8px 40px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(270.38deg, #362A84 0.23%, #5936B4 94.2%);
`;

/* WEATHER CARD */
export const WeatherCard = styled.div`
  width: 709px;
  height: 220px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;   /* ✅ разделяем на левую и правую часть */
  align-items: center;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;   /* ✅ кнопки справа */
  gap: 12px;
`;

export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const CityName = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const Temperature = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 57px;
  font-weight: 500;
  color: #fff;
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #fff;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #fff;
  background: transparent;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export const DeleteButton = styled(SaveButton)``;

