import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage"
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs"
import Bookmarks from "../Pages/Bookmarks"
import Blog from "../Pages/Blog"
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blogs',
            loader: () => fetch('https://dev.to/api/articles/?per_page=20&top=7'),
            element: <Blogs />,
        },
        {
            path: "/blog/:id",
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Blog />,
            children: [
                {
                   index: true, 
                   element: <Content></Content>,
                   loader: ({params}) => fetch(`https://dev.to/api/articles/${params?.id}`),
                },
                {
                    path: 'author',
                    element: <Author></Author>,
                    loader: ({params}) => fetch(`https://dev.to/api/articles/${params?.id}`),
                }
            ]
        },
        {
            path: '/bookmarks',
            element: <Bookmarks />
        },

    ]
  },
]);