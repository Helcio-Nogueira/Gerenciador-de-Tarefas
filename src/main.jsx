import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />, //esse será renderizado na rota raiz (root - página web)
  },
  {
    path: "/details-task",
    element: <DetailsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

// Ele é quem renderiza nosso componente App.jsx, e todos os correlatos,
// dentro do elemento id "root" no HTML
//--------------------
// <App /> é substituido por RouterProvider,
// que vai ser o responsável por renderizar as rotas, essas definidas no objeto router
