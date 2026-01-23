import styled from "@emotion/styled";
import bgImage from "..//assets/Вставленное изображение.png";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;



export const Header = styled.header`
    width: 100%;
    min-height: 80px;
     background: rgba(20, 40, 60, 0.70); /* обязательно с прозрачностью */
    backdrop-filter: blur(15px) saturate(120%);
    -webkit-backdrop-filter: blur(16px) saturate(120%);
    border-bottom: 1px solid #D2D2D2;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 25.5px;
    font-size: 24px;
    font-weight: bold;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 100%;
  width: 80px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 63px;
  height: 100%;
  align-items: center;
 `;

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  color: white;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 140px;
    background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
`;



export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  // fontSize: isActive ? "23px" : "20px"
//   textDecoration: isActive ? "underline" : "none",
});