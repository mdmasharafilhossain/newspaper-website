import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Components/AuthProviders/AuthProviders.jsx';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProviders>
    </div>
  </React.StrictMode>,
)
