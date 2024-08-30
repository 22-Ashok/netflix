import Home from "./components/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import SecRoute from './components/SecRoute'
import ThirdRoute from "./components/ThirdRoute"
import ForthRoute from "./components/ForthRoute"

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
  }])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
