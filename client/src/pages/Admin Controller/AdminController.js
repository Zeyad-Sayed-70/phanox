import { useEffect, useState } from "react"
import AdminControllerStyled from "./AdminController.styled"
import AdminDash from './AdminDash/dash'
import AdminAuth from './AdminAuth'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, postProduct } from '../../features/admin/adminSlice'
// import {config} from 'dotenv'

const AdminController = () => {
  const [protect, setProtect] = useState(false)

  return (
    <>
    <AdminControllerStyled>
      <AdminDash />
        {/* {protect ? <AdminDash /> : <AdminAuth setProtect={setProtect}/> } */}
    </AdminControllerStyled>
    </>
  )
}

export default AdminController