import styled from 'styled-components'

const FooterStyled = styled.div`
    background-color: #f02d34;
    color: white;
    border-radius: 15px;

    .img {
        position: relative;
    }
    
    img {
        position: absolute;
        left: 48%;
        transform: translate(-50%, -50%);
        width: 320px;
    }

    .left-text {
        h1 {
            text-transform: uppercase;
            font-size: 4.5rem;
            font-weight: 900;
        }

    }

    .right-text {
        h1 {
            text-transform: capitalize;
            font-size: 2.5rem;
            font-weight: 900;
        }

        p {
            font-size: 12px;
        }

        button {
            background-color: white;
            color: #f02d34;
            width: fit-content;
        }
    }
`

export default FooterStyled