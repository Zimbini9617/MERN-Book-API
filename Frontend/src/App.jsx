import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './error-page';
import AllBooks from './pages/AllBooks';
import AddBooks from './pages/AddBooks';
import Home from './pages/Home';
import UpdateBook from './pages/UpdateBook';


const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-books",
        element: <AddBooks />,
      },
      {
        path: "/books/:id",
        element: <UpdateBook />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App;