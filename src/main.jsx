
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Courses from './Pages/Courses.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import FAQs from './Pages/FAQs.jsx';
import LoginRegister from './Pages/LoginRegister.jsx';
import CourseSingle from './Pages/CourseSingle.jsx';
import BlogSingle from './Pages/BlogSingle.jsx';
import Errorpage from './Pages/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Courses",
        element: <Courses />,
      },
      {
        path: "Courses/:courseTitle",
        element: <CourseSingle />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "FAQs",
        element: <FAQs />,
      },
      {
        path: "LoginRegister",
        element: <LoginRegister />,
      },
      {
        path: "Blog/:blogTitle",
        element: <BlogSingle />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
