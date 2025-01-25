import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import CourseDescription from "./pages/CourseDescription";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Error />,
        handle: { title: "404-Page Not Found" },
      },
      {
        path: "",
        element: <Home />,
        handle: { title: "Hablu Programmer" },
      },
      {
        path: "courses",
        element: <Courses />,
        handle: { title: "Courses Collection | Hablu Programmer" },
        children: [
          {
            path: "course-description",
            element: <CourseDescription />,
            handle: { title: "Courses Description | Hablu Programmer" },
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
        handle: { title: "Login | Hablu Programmer" },
      },
      {
        path: "sign-up",
        element: <SignUp />,
        handle: { title: "Sign Up | Hablu Programmer" },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
