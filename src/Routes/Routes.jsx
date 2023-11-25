import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AddArticle from "../Components/Home/Navbar/AddArticle/AddArticle";
import AllArticle from "../Components/Home/Navbar/AllArticle/AllArticle";
import SubsCription from "../Components/Home/Navbar/SubsCription/SubsCription";
import MyArticle from "../Components/Home/Navbar/MyArticle/MyArticle";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/AddArticle",
            element:<AddArticle></AddArticle>
        },
        {
            path:"/AllArticle",
            element:<AllArticle></AllArticle>
        },
         {
            path:"/Subscription",
            element:<SubsCription></SubsCription>
         },
         {
            path:"/MyArticle",
            element:<MyArticle></MyArticle>
         },
         {
            path:"/login",
            element:<Login></Login>
         }
      ]
    },
  ]);

