import { createContext } from "react"

const CartDataAPI = createContext()

const initialCartData = {
    items: []
}

export {initialCartData}
export default CartDataAPI
