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
import Patment from "../Components/Payment/Patment";
import Statistics from "../Components/DashBoard/Statisctics/Statistics";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Feedback from "../Components/Feedback/Feedback";
import UserFeedback from "../Components/UserFeedback/UserFeedback";

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
            element:<PrivateRoute><AddArticle></AddArticle></PrivateRoute>
        },
        {
            path:"/AllArticle",
            element:<PrivateRoute><AllArticle></AllArticle></PrivateRoute>
        },
         {
            path:"/Subscription",
            element:<PrivateRoute><SubsCription></SubsCription></PrivateRoute>
         },
         {
            path:"/MyArticle",
            element:<PrivateRoute><MyArticle></MyArticle></PrivateRoute>
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
            element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
         },
         {
            path:"/premiumArticle",
            element:<PrivateRoute><PremiumArticle></PremiumArticle></PrivateRoute>
         },
         {
            path:"/feedback",
            element:<Feedback></Feedback>
         },
         {
            path:"/articleDetails/:id",
            element:<PremiumArticleDetails></PremiumArticleDetails>,
            // loader: ()=>fetch('http://localhost:5000/premiumArticle')
            loader: ()=>fetch('https://newspaper-server-rosy.vercel.app/premiumArticle')
         },
         {
            path:"/serviceDetails/:id",
            element:<PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
            loader: ()=>fetch('https://newspaper-server-rosy.vercel.app/article')
         },
         {
            path:"/payment",
            element:<Patment></Patment>
         }
        
      ]
    },

    {
      path:"/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
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
            },
            {
               path:"/dashboard/statistics",
               element:<Statistics></Statistics>
            },
            {
               path:"/dashboard/userFeedback",
               element:<UserFeedback></UserFeedback>
            }

      ]
    }
  ]);

