import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { Footer } from "./components/layout/Footer";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return <Router />;
}
