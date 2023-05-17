import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/Head/Head'
import Products from '../../Components/Products/Products'
import Footer from "../../Components/Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../features/admin/adminSlice'
import { useEffect } from "react"
import { useState } from "react"



const Home = () => {
  const {data} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(data)

  return (
    <>
    <Navbar />
    <Head />
    <Products products={data?.data} />
    <Footer />
    </>
  )
}

export default Home
