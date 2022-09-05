import styled from "styled-components"

const CartStyled = styled.div`
    .cart {
        position: fixed;
        right: 0;
        top: 0;
        width: 500px;
        height: 100vh;
        background-color: white;
        z-index: 100;
        max-width: 100%;
    }

    .products {
        flex: 1;
        overflow: auto;
        padding: 0 20px 0 0;
    }

    .products::-webkit-scrollbar {
        background-color: #ccc;
        width: 5px
    }
    .products::-webkit-scrollbar-thumb {
        background-color: #333;
    }

    .img {
        background-color: #ccc;
        padding: 20px 10px;
        border-radius: 10px;
        height: 120px;

        img {
            object-fit: contain;
        }
    }

    .quantity {
        span, button {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #324d67;
            font-size: 15px;
            font-weight: bold;
            background-color: white;
            cursor: pointer;
            
            svg {
                font-size: 15px;
            }
        }
    }
    
    .discount_box {
        width: fit-content;
        background-color: #ffa59e;
        color: #fff;
        font-weight: bold;
        padding: 2px 8px;
        font-size: 10px;
        margin-left: 10px;
    }

`

export default CartStyled