import { Suspense, lazy } from "react"
const Home = lazy(() => import('./components/Home'));
import { createBrowserRouter,RouterProvider } from "react-router-dom"
const SecRoute = lazy(() => import('./components/SecRoute'))
const ThirdRoute = lazy(() => import('./components/ThirdRoute'))
const ForthRoute = lazy(() => import('./components/ForthRoute'))
import SignInPage from "./components/SignInPage"
import Shimmer from "./components/Shimmer";

function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element: (
      <Suspense fallback={<Shimmer />}>
         <Home />
      </Suspense>
    )
  },{
    path:'/tvshow',
    element: (
      <Suspense fallback={<Shimmer />}>
        <SecRoute />
      </Suspense>
    )
  },{
    path:'/movie',
    element: (
      <Suspense fallback={<Shimmer />}>
        <ThirdRoute />
      </Suspense>
    )
  },{
    path:'/popular',
    element: (
      <Suspense fallback={<Shimmer />}>
        <ForthRoute />
      </Suspense>
    )
  }, {
    path:'/signin',
    element:<SignInPage />
  }, {
    path:'*',
    element:<h1 className='flex justify-center items-center font-extrabold text-2xl h-screen'>Ooops! Page not found.</h1>
  }])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
