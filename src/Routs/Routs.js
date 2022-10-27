import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import FAQ from "../Pages/FAQ/FAQ";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Register from "../Pages/Register/Register";
import CoursePageLayout from "../Layout/CoursePageLayout";
import DataNotFound from "../Pages/Shared/DataNotFound/DataNotFound";




export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/course',
          element: <CoursePageLayout></CoursePageLayout>,
          loader: () => fetch('https://bright-education.vercel.app/course') 
        },
        {
          path: '/course/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`https://bright-education.vercel.app/course/${params.id}`)
        },
        {
          path: '/course/:id/checkout',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`https://bright-education.vercel.app/course/${params.id}`)
        }
        ,
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <DataNotFound></DataNotFound>
        }
      ]
    }
  ])