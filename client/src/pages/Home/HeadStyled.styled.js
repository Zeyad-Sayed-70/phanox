import styled from 'styled-components'

const HeadStyled = styled.div`
    background-color: #333;
    background-image: url('./mosque.jpg');
    background-position:  center;
    background-size: cover;
    height: 450px;
    color: #fff;
    position: relative;

    .head_overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,50%);
        backdrop-filter: blur(2px);
    }

    .main_head {
        position: relative;
    }

    h1 {
        font-size: 3rem;
        span {
            color: red;
            display: block;
        }
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 2rem;
            text-align: center;
        }
    }

    .search {
        input {
            background-color: #fff;
        }
        button {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 11px;
            font-weight: bold;
        }
    }

    a {
        color: #ccc;
        width: fit-content;
    }
`

export default HeadStyled