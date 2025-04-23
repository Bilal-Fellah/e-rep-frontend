import { Outlet } from "react-router";
import { Header } from "./Navigation/Header";
import { LanguageProvider } from "../contexts/LanguageContext";

export const MainLayout = () => {
  return (
    <LanguageProvider>
      <Header />
      <Outlet />
    </LanguageProvider>
  );
};
