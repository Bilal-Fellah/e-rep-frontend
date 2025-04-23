import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Header } from "./layouts/Navigation/Header";
import { MainPage } from "./pages/MainPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
