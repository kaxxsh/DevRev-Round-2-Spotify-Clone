import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Userprovider from './Components/Context/ContextProvide'
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Userprovider>
    <RouterProvider router={router} />
  </Userprovider>
);
