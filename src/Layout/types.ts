import { type ReactNode,  } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface currentWeather {
  id: string;
  city: string;
  celsius: number;
  icon: string;
}
