import React from 'react'
import cart_small from '../../media/cart-small.png'
import './ProductStyle.css'
import product1 from '../../media/Product 1.png';
import product2 from '../../media/Product 2.png';
import product3 from '../../media/Product 3.png';
import product4 from '../../media/Product 4.png';
import product5 from '../../media/Product 5.png';
import product6 from '../../media/Product 6.png';
import product7 from '../../media/Product 7.png';
import product8 from '../../media/Product 8.png';
import product9 from '../../media/Product 9.png';
import product10 from '../../media/Product 10.png';
import product11 from '../../media/Product 11.png';
import product12 from '../../media/Product 12.png';
import { Link } from 'react-router-dom';

const products = [
  {
    id:1,
    price:'$400.00',
    img:product1
  },
  {
    id:2,
    price:'$400.00',
    img:product2
  },
  {
    id:3,
    price:'$400.00',
    img:product3
  },
  {
    id:4,
    price:'$400.00',
    img:product4
  },
  {
    id:5,
    price:'$400.00',
    img:product5
  },
  {
    id:6,
    price:'$400.00',
    img:product6
  },
  {
    id:7,
    price:'$400.00',
    img:product7
  },
  {
    id:8,
    price:'$400.00',
    img:product8
  },
  {
    id:9,
    price:'$400.00',
    img:product9
  },
  {
    id:10,
    price:'$400.00',
    img:product10
  },
  {
    id:11,
    price:'$400.00',
    img:product11
  },
  {
    id:12,
    price:'$400.00',
    img:product12
  },
]

const Product = () => {
  return (
    <>
      {
        products && products.map((item, index)=>{
          return(
            <Link key={index} className='image' to="/single/1">
              <div>
                <img src={item.img} alt='galleryimage' />
                <div className='overlay'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <span>{item.price}</span>
                      <span><img src={cart_small} alt='cart'/></span>
                    </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Product