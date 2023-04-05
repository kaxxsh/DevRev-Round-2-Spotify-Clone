import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Userprovider from './Components/Context/ContextProvide'
import Signin from './Components/Signin/Signin';
import Home from './Components/Home/Home';
import Spotify from './Components/Spotify/Spotify';
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
    path: "/Spotify",
    element: <Spotify />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Userprovider>
    <RouterProvider router={router} />
  </Userprovider>
);
