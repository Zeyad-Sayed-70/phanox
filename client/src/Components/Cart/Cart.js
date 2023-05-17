import { Button, IconButton } from "@mui/material"
import { Col } from "react-bootstrap"
import CartStyled from "./CartStyled.styled"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext, useEffect, useState } from "react";
import CartDataAPI from '../../cartDataAPI'
import axios from 'axios'
import getStripe from "../../stripe";
import { BACK_END_URL } from "../../constant";
import getImageUrl from "../../utils/getImageUrl";

const Cart = ({setIsCart}) => {
  const {cartData, setCartData} = useContext(CartDataAPI)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let totalPrice = 0 
    cartData.items.map(item => {
        totalPrice += (item.price - (item.price * (item.discount / 100))) * item.quantity
    })
    setTotal(totalPrice) 
  }, [cartData])

  const decItemQuantity = (id) => {
    const newCartData = cartData.items.map(item => {
        if ( item.productId === id ) {
            item.quantity -= 1
        }
        return item
    })
    setCartData({items: newCartData})
  }

  const incItemQuantity = (id) => {
    const newCartData = cartData.items.map(item => {
        if ( item.productId === id ) {
            item.quantity += 1
        }
        return item
    })
    setCartData({items: newCartData})
  }
  
  const removeItem = (id) => {
    const newCartData = cartData.items.filter(item => item.productId !== id )
    setCartData({items: newCartData})
  }

  const handleCheckOut = async () => {

    const stripe = await getStripe()
    
    const response = axios.post(`${BACK_END_URL}/create-checkout-session`, cartData.items)
    
    if ( response.status === 500 ) return;

    const { data } = await response;

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <>
    <CartStyled>
    <Col className="cart p-3 d-flex flex-column">
        <div className="d-flex align-items-center gap-2">
            <IconButton onClick={() => setIsCart(false)}><KeyboardArrowLeftIcon /></IconButton>
            <span className="fw-bold fs-6">Your Cart</span>
            <span className="text-danger">({cartData.items.length} Items)</span>
        </div>
        <div className="products my-4">
            {cartData.items.map((item, ind) => (
                <div key={item.productId} className="d-flex  gap-3 px-3 my-3">
                <Col className="col-5 col-md-4">
                    <div className="img"><img className="w-100 h-100" src={getImageUrl(item.images[0])} alt={item.title} /></div>
                </Col>
                <Col className="col-7 col-md-8 d-flex flex-column gap-3">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <h5 className="fw-bold m-0">{item.title}</h5>
                        <div>
                            <span className="fw-bold">${(item.price - (item.price * (item.discount / 100))).toFixed(2)}</span>
                            {item.discount !== 0 && <span className=" ms-2" style={{textDecoration: 'line-through', color: '#ccc', fontSize: '12px'}}>${item?.price}</span>}
                            {item.discount !== 0 && <span className='discount_box ms-2'>%{item.discount}</span>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="quantity d-flex">
                            <button onClick={() => decItemQuantity(item.productId)} disabled={item.quantity === 1}><RemoveIcon className="text-danger"/></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => incItemQuantity(item.productId)} disabled={item.quantity === 30}><AddIcon className="text-success"/></button>
                        </div>
                        <IconButton onClick={() => removeItem(item.productId)}><RemoveCircleOutlineIcon className="text-danger"/></IconButton>
                    </div>
                </Col>
            </div>
            ))}
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
            <span className="fw-bold fs-6">Subtotal:</span>
            <span className="fw-bold fs-6">${total.toFixed(2)}</span>
        </div>
        <div className="px-5 mt-4"><Button variant="contained" color="error" fullWidth onClick={handleCheckOut}>pay with stripe</Button></div>
    </Col>
    </CartStyled>
    </>
  )
}

export default Cart