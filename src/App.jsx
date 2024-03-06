
import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetail from './components/Products/ProductDetail/ProductDetail.jsx'

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((response) => setData(response))
  },[])

  useEffect(()=>{
    console.log(data);
  },[data])

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<Home data={data}/>
    },
    {
      path:"/products",
      element:<Products data={data}/>
    },
    {
      path:"/products/:id",
      element:<ProductDetail data={data}/>
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
