import styled from 'styled-components'

const HeadStyled = styled.div`
    .content {
        position: relative;
    }
    h1 {
        overflow: hidden;
    }
    .des {
        font-size: 12px;
        color: #333;
    }
    img {
        position: absolute;
        right: 14rem;
        top: 2rem;
        width: 220px;
    }
    @media (max-width: 989px) {
        img {
            right: 6rem;
            top: 1rem;
        }        
    }
    @media (max-width: 767px) {
        .content {
            text-align: center;
        }
        img {
            display: none;
        }
        h1 {
            font-size: 3rem !important;
            margin: auto !important;
        }
        .des {
            flex-direction: column !important;
            button {
                width: 100%;
            }
        }
    }
`

export default HeadStyled