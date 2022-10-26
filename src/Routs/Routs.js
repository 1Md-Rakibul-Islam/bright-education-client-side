import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import FAQ from "../Pages/FAQ/FAQ";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CoursePageLayout from "../Layout/CoursePageLayout";




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
          loader: () => fetch('http://localhost:5000/course') 
          // children: [

          // ]
        },
        // {
        //   path: '/categories',
        //   element: <CoursePageLayout></CoursePageLayout>,
        //   loader: () => fetch(`http://localhost:5000/categories`)
        // },
        // {
        //   path: '/categories/:id',
        //   element: <Categories></Categories>,
        //   loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        // },
        {
          path: '/course/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
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
        }
      ]
    }
  ])