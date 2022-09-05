import { Button } from "@mui/material"
import { Container } from "react-bootstrap"
import HeadStyled from "./HeadStyled.styled"
const Head = () => {
  return (
    <>
    <HeadStyled>
        <Container style={{maxWidth: '1000px'}}>
            <div className="content px-3 px-md-4 px-lg-5 pt-5 pb-4" style={{backgroundColor: '#dcdcdc', borderRadius: '10px'}}>
                <span>Beats solo</span>
                <h2 className="m-0" style={{fontWeight: '700'}}>Wireless</h2>
                <h1 className="text-light" style={{fontSize: '6rem', fontWeight: '700', margin: '-15px 0'}}>HEADPHONE</h1>
                <img src="./headphone.png" alt="headphone" />
                <div className="des d-flex align-items-start justify-content-between p-0 pe-md-4">
                    <Button className="mt-4" variant="contained" color="error" >Shop wireless headphone</Button>
                    <div className="col-12 col-md-4 mt-5 d-flex flex-column align-items-center align-items-md-end">
                        <span className="fw-bold">Description</span>
                        <p className="text-center text-md-end m-0">The Tooltip has 12 placements choice. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.</p>
                    </div>
                </div>
            </div>
        </Container>
    </HeadStyled>
    </>
  )
}

export default Head