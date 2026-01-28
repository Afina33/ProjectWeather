import styled from "@emotion/styled";
import bgImage from "..//assets/Вставленное изображение.png";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export const LayoutWrapper = styled.div`
   display: flex;
  flex-direction: column;
  
  flex: 1;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
`;



export const Header = styled.header`
   display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid black;
  padding: 42px 84px;
  background-color: #122D4D80;
  border-color: #D2D2D2;
  color: white;
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
  font-weight: 200;
  text-decoration: none;
  color: white;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 60px;
    padding: 140px;
    flex: 1;
`;



export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  // fontSize: isActive ? "23px" : "20px"
//   textDecoration: isActive ? "underline" : "none",
});