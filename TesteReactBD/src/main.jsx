import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TesteDeBD from "./components/TesteDeBancoDeDados/TesteDeDB";
import ListaDeAfazeres from "./components/listaDeTasks/ListaDeAfazeres";
import TaskDetails from "./components/listaDeTasks/TaskDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/noticias/:rogerio", element: <TesteDeBD /> },
  { path: "/listaDeAfazeres", element: <ListaDeAfazeres /> },
  { path: "/listaDeAfazeres/:idDaTask", element: <TaskDetails /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
