import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/about/About.jsx';
import Contact from './Components/Contac/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDeta/UserDetails.jsx';
import Posts from './Components/posts/Posts.jsx';
import Postdetails from './Components/postDetails/Postdetails.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement:<Error />,
    children: [
      {
        path:'/about',
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users />
      },
      {
        path:"/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails />
      },
      {
        path:'/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts />
      },
      {
        path:'/post/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Postdetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
