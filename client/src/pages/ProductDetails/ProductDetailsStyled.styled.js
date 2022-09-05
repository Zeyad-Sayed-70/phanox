import styled from 'styled-components'

const ProductDetailsStyled = styled.div`
    color: #324d67;

    .main_img {
        max-width: 500px;
        margin: 0 auto;
        height: 420px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ebebeb;
        border-radius: 50px 50px 0 0;
        overflow: hidden;
        img {
            mix-blend-mode: multiply;
            object-fit: contain;
            height: 100%;
        }
    }
    .sec_img {
        max-width: 500px;
        margin: 0 auto;
        background-color: #ebebeb;
        align-items: center;
        height: 120px;
        overflow-y: hidden;
        overflow-x: auto;
        border-radius: 50px 50px 0 0;
        transform: rotateX(180deg);
        
        .img {
            height: 100%;
            border-radius: 50px;
            cursor: pointer;

            div {
                /* transform: rotateX(180deg); */

            }
        }
        

        img {
            max-height: 100px;
            object-fit: cover;
            transform: rotateX(180deg)
        }
    }
    .sec_img::-webkit-scrollbar {
        background-color: #cacaca;
        height: 7px;
    }
    .sec_img::-webkit-scrollbar-thumb {
        background-color: #202124;
    }

    .details {
        p {
            font-size: 13px;
        }
    }

    .quantity {
        span, button {
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #324d67;
            font-size: 20px;
            font-weight: bold;
            background-color: white;
            cursor: pointer;
            
            svg {
                font-size: 20px;
            }
        }
    }

    .discount_box {
            width: fit-content;
            background-color: #ffa59e;
            color: #fff;
            font-weight: bold;
            padding: 2px 10px;
            font-size: 16px;
            margin-left: 10px;
    }
`

export default ProductDetailsStyled