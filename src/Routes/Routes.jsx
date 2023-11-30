import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AddArticle from "../Components/Home/Navbar/AddArticle/AddArticle";
import AllArticle from "../Components/Home/Navbar/AllArticle/AllArticle";
import SubsCription from "../Components/Home/Navbar/SubsCription/SubsCription";
import MyArticle from "../Components/Home/Navbar/MyArticle/MyArticle";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import UserProfile from "../Components/Home/Navbar/UserProfile/UserProfile";

import ArticleDetails from "../Components/ArticleDetails/ArticleDetails";
import DashBoard from "../Components/DashBoard/DashBoard";
import AllUser from "../Components/DashBoard/AllUser/AllUser";

import AddPublisher from "../Components/DashBoard/AddPublisher/AddPublisher";
import AllArtile from "../Components/DashBoard/AllArticle/AllArtile";
import PremiumArticle from "../Components/Home/Navbar/PremiumArticle/PremiumArticle";

import PremiumArticleDetails from './../Components/Home/Navbar/PremiumArticle/PremiumArtilceDetails/PremiumArticleDetails';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
         },
         {
            path:"/register",
            element:<Register></Register>
         },
         {
            path:"/UserProfile",
            element:<UserProfile></UserProfile>
         },
         {
            path:"/premiumArticle",
            element:<PremiumArticle></PremiumArticle>
         },
         {
            path:"/serviceDetails/:id",
            element:<PremiumArticleDetails></PremiumArticleDetails>,
            loader: ()=>fetch('http://localhost:5000/premiumArticle')
         },
         {
            path:"/serviceDetails/:id",
            element:<ArticleDetails></ArticleDetails>,
            loader: ()=>fetch('http://localhost:5000/article')
         },
        
      ]
    },

    {
      path:"/dashboard",
      element:<DashBoard></DashBoard>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
            {
               path:"/dashboard/allUser",
               element:<AllUser></AllUser>
            },
            {
               path:"/dashboard/allArticle",
               element:<AllArtile></AllArtile>
            },
            {
               path:"/dashboard/addPublisher",
               element:<AddPublisher></AddPublisher>
            }

      ]
    }
  ]);

