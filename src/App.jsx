import Home from "./components/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SecRoute from './components/SecRoute'
import ThirdRoute from "./components/ThirdRoute"
import ForthRoute from "./components/ForthRoute"
import SignInPage from "./components/SignInPage"

function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<Home />
  },{
    path:'/tvshow',
    element:<SecRoute />
  },{
    path:'/movie',
    element:<ThirdRoute />
  },{
    path:'/popular',
    element:<ForthRoute />
  }, {
    path:'/signin',
    element:<SignInPage />
  }])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
