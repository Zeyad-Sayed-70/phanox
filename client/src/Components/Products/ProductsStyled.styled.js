import styled from "styled-components";

const ProductStyled = styled.div`
    .product {
        width: calc(100% / 5);
        text-transform: capitalize;
        color: #333;

        @media (max-width: 989px) {
            & {
                width: calc(100% / 3);
            }
        }
        
        @media (max-width: 767px) {
            & {
                width: calc(100% / 2);
            }
        }
        
        .title {
            color: #324d67;
            font-size: 14px;
            font-weight: 500;
        }

        a {
            text-decoration: none;
            color: #333;
            cursor: pointer;
        }
        
        & a > div {
            background: #ebebeb;
            padding: 20px;
            border-radius: 20px;
            overflow: hidden;
            height: 140px;
            transition: .3s;
            &:hover {
                background-color: #f02d34;
            }

            img {
                /* mix-blend-mode: multiply; */
                object-fit: cover;
            }
        }

        .discount {
            background-color: #ffa59e;
            color: #fff;
            font-weight: bold;
            padding: 2px 5px;
            font-size: 10px;
            margin-left: 10px;
        }
    }
`

export default ProductStyled