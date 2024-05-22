import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home components/Home';
import About from './about/About';
import ProjectsMother from './Projects/ProjectsMother';
import Contact from './Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path: "/project",
        element: <ProjectsMother></ProjectsMother> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
