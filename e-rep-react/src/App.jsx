import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Header } from "./layouts/Navigation/Header";
import { Dashboard } from "./pages/Dashboard";
import { MainPage } from "./pages/MainPage";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
