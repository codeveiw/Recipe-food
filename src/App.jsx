import Home from './components/Home/Home.jsx'
import CategoryMeals from './pages/CategoryMeals.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import DetailsMeal from './pages/DetailsMeal.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {path: '/', element: <Home />},
     
        {
          path: 'category/:category',
          element: <CategoryMeals />
        },
        {
          path: 'mealdetails/:id',
          element: <DetailsMeal />
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App

