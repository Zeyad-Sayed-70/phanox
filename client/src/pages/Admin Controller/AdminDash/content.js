import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Button, Checkbox, FormControlLabel, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { postProduct, delProduct } from '../../../features/admin/adminSlice'
import {v4} from 'uuid'
import CloseIcon from '@mui/icons-material/Close';
const dataSchema = {
    title: '',
    details: '',
    price: 0,
    discount: 0,
    images: [],
    rating: 0,
}

const Content = ({prodata}) => {
  const { ontherData } = useSelector(state => state.product)
  const [isDiscount, setIsDiscount] = useState(false)
  const [data, setData] = useState(dataSchema)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(ontherData)
  }, [ontherData])


    const handleAddProduct = (e) => {
      e.preventDefault();
      
      const formData = new FormData()      
      
      // Add Product Images      
      for(let i = 0; i < data.images.length; i++) {
        formData.append('productImg', data.images[i])
      }

      // Add Product Info
      formData.append('title', data.title)
      formData.append('details', data.details)
      formData.append('price', data.price)
      formData.append('rating', data.rating)
      formData.append('discount', data.discount)
      formData.append('productId', v4())

      // Post Form Data to server
      dispatch(postProduct(formData))
    }

    const handleDelProduct = (id) => {
      console.log(id)
      dispatch(delProduct(id))
    }

  return (
    <>
    <div className='add_product_Container p-md-5 mb-2'>
        <ul style={{maxHeight: '400px', overflow: 'auto'}}>
            {prodata?.map(pro => (
                <li key={pro._id} style={{backgroundColor: 'white'}} className="p-2 px-4">
                <Col className="col-1" style={{width: '50px'}}><img className='w-100' src={pro.images[0]} alt={pro.title} /></Col>
                <div className="d-flex flex-column ps-4 mb-2">
                    <Col className="d-flex align-items-center">{pro.title}</Col>
                    <Rating name="read-only" value={pro.rating} readOnly style={{fontSize: '25px'}} />
                    <span>${pro.price}</span>
                </div>
                <div className="del_product" onClick={() => handleDelProduct(pro._id)}><CloseIcon /></div>
              </li>
            ))}

      </ul>
    </div>
    {/* add form to add product */}
    <div className="w-100 px-3">
      <h2 className="">Add Product</h2>
      <form onSubmit={handleAddProduct}>
      <RedditTextField
        label="Product Title"
        defaultValue=""
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        fullWidth
        onChange={(e) => setData({...data, title: e.target.value})}
      />
      <RedditTextField
        label="Product Details"
        defaultValue=""
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        fullWidth
        onChange={(e) => setData({...data, details: e.target.value})}
      />
      <RedditTextField
        label="Product Price"
        defaultValue=""
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        fullWidth
        onChange={(e) => setData({...data, price: parseFloat(e.target.value)})}
      />
      <RedditTextField
        label="Product Rating"
        defaultValue=""
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        fullWidth
        onChange={(e) => setData({...data, rating: parseFloat(e.target.value)})}
      />
      <FormControlLabel control={<Checkbox />} label="Has Discount" onChange={e => setIsDiscount(e.target.checked)} />
      {isDiscount && 
      <RedditTextField
        label="Product Discount "
        defaultValue=""
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
        fullWidth
        onChange={(e) => setData({...data, discount: parseFloat(e.target.value)})}
      />}
      <h4 className="my-3">Add Images For Product</h4>
        <input
            type="file" 
            name="productImg"
            onChange={ (e) => setData({...data, images: [...data.images, e.target.files[0]]}) } 
          />
        <div className="my-3"><Button type="submit" variant="contained">Add Produt</Button></div>
      </form>
    </div>
    </>
  )
}

export default Content

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  