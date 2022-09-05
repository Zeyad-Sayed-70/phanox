import styled from 'styled-components'

const AdminControllerStyled = styled.div`
    .add_product_Container {
        width: 100%;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        li {
            display: flex;
            font-size: 20px;
            text-transform: capitalize;
            position: relative;
        }
        li:hover .del_product {
            display: flex;
        }
        .del_product {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translate(-50%, -50%);
            color: white;
            background: #f44336;
            width: 30px;
            height: 33px;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            display: none;
        }
    }
`


export default AdminControllerStyled