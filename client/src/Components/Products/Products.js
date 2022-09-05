import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'

const Products = ({products}) => {
  return (
    <>
    <ProductStyled>
        <Container className="my-5">
            <div className="text-center" style={{color: '#324d67'}}>
                <h2 className="fw-bold">Best Seller Products</h2>
                <span>speaker There are many variations passages</span>
            </div>
            {!products?.length > 0 ? <div className="pt-4 pb-4 mt-5 d-flex justify-content-center align-items-center"><Spinner animation="grow" variant="danger" /></div> : <div className="d-flex flex-wrap mt-5">
                {products?.map((product, ind) => {
                    return (
                    <div key={ind} className="product px-2 mb-4">
                        <a href={`products/${product.productId}`}>
                            <div className="d-flex justify-content-center mb-1"><img src={product.images[0]} alt={product.title} /></div>
                            <span className="title d-block ms-2">{product.title.length >= 30 ? product.title.slice(0, 30) + '...' : product.title}</span>
                            { product.discount !== 0 && <span className="fw-bold ms-2">${(product.price - (product.price * (product.discount / 100))).toFixed(2)}</span>}
                            <span style={{ textDecoration: product.discount !== 0 ? 'line-through' : 'none', color: product.discount !== 0 ? '#929292' : '#333'}} className="fw-bold ms-2">${product.price}</span>
                            {product.discount !== 0 && <span className='discount'>-%{product.discount}</span>}
                        </a>
                    </div>
                    )}
                )}
            </div>}
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products