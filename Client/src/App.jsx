import React from 'react'
import { Gig, Gigs, Home, Orders, MyGigs, Add, Message, Messages, Register } from './Pages/index'
import { Navbar, Footer } from './Components/index'
import './App.scss'
import {
  createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom"

function App() {

  const Layout =()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/gigs',
          element: <Gigs/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/gig/:id',
          element: <Gig/>
        },
        {
          path: '/orders',
          element: <Orders/>
        },
        {
          path: '/mygigs',
          element: <MyGigs/>
        },
        {
          path: '/add',
          element: <Add/>
        },
        {
          path: '/message/:id',
          element: <Message/>
        },
        {
          path: '/messages',
          element: <Messages/>
        },
        ]
    }
  ]
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App