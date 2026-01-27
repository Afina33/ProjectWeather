import { type ReactNode,  } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface currentWeather {
  id: string;
  city: string;
  celsius: number;
  icon: string;
  ///////
  FeelsLike: string;
  tempMin: string;
  tempMax: string;
  pressure: string;
  visibility: string;
  speed: string;
  deg: string;
  sunrise: number; // восход
  sunset: number; // закат
  humidity:string;
}
