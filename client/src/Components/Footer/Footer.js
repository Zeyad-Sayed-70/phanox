import { Button, IconButton, Link } from "@mui/material"
import { Col, Container } from "react-bootstrap"
import FooterStyled from './FooterStyled.styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { VERSION } from "../../constant"

const CopyRights = () => {
    return (
        <div style={{ color: '#324d67' }} className="mt-5 pt-5 d-flex flex-column align-items-center">
            <span className="d-block fw-bold mb-2">©2022 Phanox Alll Rights Reserved v{VERSION}</span>
            <div>
                <IconButton style={{ height: '40px' }}><Link href="#" style={{ color: '#324d67' }}><FacebookIcon /></Link></IconButton>
                <IconButton style={{ height: '40px' }}><Link href="#" style={{ color: '#324d67' }}><InstagramIcon /></Link></IconButton>
            </div>
        </div>
    )
}

const Footer = () => {
  return (
    <>
    <Container className="mt-5 py-5">
        <FooterStyled className="d-flex flex-wrap align-items-center py-5 px-4 text-center text-md-start">
            <Col className="left-text col-12 col-md-6 col-lg-3 d-flex flex-column">
                <span>20% OFF</span>
                <h1>fine smile</h1>
                <span>15 Nov to 7 dec</span>
            </Col>
            <Col className="img col-6 d-none d-lg-block ">
                <img src="./pc.png" alt="earpods" />
            </Col>
            <Col className="right-text col-12 col-md-6 col-lg-3 d-flex flex-column mt-5 mt-md-0">
                <span>Beats Solo Air</span>
                <h1>Summer Sale</h1>
                <p>The Tooltip has 12 placements choice. They don't have. </p>
                <Button variant="contained" className="mx-auto m-md-0 mt-md-3" >shop now</Button>
            </Col>
        </FooterStyled>
        <CopyRights />
    </Container>
    </>
  )
}

export default Footer
