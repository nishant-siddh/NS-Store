import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from '../Context/ProductContext';
import FormatPrice from './FormatPrice';
import ProductImages from './ProductImages';
// import { Container } from './Container';
import PageNavigation from './PageNavigation';
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Button } from '../Styles/Button';
import { useState } from 'react';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { isSingleProductLoading, getSingleProduct, singleProducts } = useProductContext();
  const { id } = useParams();

  const [count, SetCount] = useState(1);

  const handleDecrement = () => {
    SetCount(prev => prev - 1);
  }

  const handleIncrement = () => {
    SetCount(prev => prev + 1);
  }

  const {
    // id: alias,
    name,
    company,
    price,
    description,
    // category,
    stock,
    stars,
    image,
    reviews
  } = singleProducts || {};

  // console.log(singleProducts)

  // eslint-disable-next-line

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isSingleProductLoading) {
    return (<>
      <div className='pageLoading'>...Loading</div>
    </>)
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container>
        <div className='container flexProperty'>

          {/* product Images */}
          <div className="productImage">
            <div>
              {image &&
                <>
                  <ProductImages img={image} />
                  {/* {console.log(image, 'product image')} */}
                </>
              }
            </div>
          </div>

          {/* product data */}
          <div className="productData">
            <h2 className='category'><em>{name}</em></h2>
            <p className='stars'>{stars}</p>
            <p className='review'>({reviews} customer reviews)</p>

            <p className='originalPrice'>
              MRP&nbsp;&nbsp;
              <del><FormatPrice price={price + 250000} /></del>
              <span>&nbsp;&nbsp;(Inclusive of all taxes)</span>
            </p>

            <p className="discountedPrice">
              <FormatPrice price={price} />
            </p>

            <p className="description">
              {description}
            </p>

            <div className='productWarrenty flexProperty'>
              <div className='productWarrentyData'>
                <TbTruckDelivery className='warrentyIcon' />
                <p>Free Delivery</p>
              </div>

              <div className='productWarrentyData'>
                <TbReplace className='warrentyIcon' />
                <p>30 Days Replacement</p>
              </div>

              <div className='productWarrentyData'>
                <TbTruckDelivery className='warrentyIcon' />
                <p>NS Delivered</p>
              </div>

              <div className='productWarrentyData'>
                <MdSecurity className='warrentyIcon' />
                <p>2 Years Warrenty</p>
              </div>
            </div>

            <div className='available'>
              <p>Available: <span>{stock > 0 ? 'In stock' : 'Out of stock'}</span></p>
            </div>

            {/* <p className='id'>
              ID: <span>{alias}</span>
            </p> */}

            <p className='brand'>
              Brand: <span>{company}</span>
            </p>


            <div className='noOfItemsToCart flexProperty'>
              {/* <span>Select no. of Items : </span> */}
              <div className="btns flexProperty">
                <button className="decreaseNoOfItems" disabled={count > 1 ? false : true} onClick={handleDecrement}>-</button>
                <p>{count}</p>
                <button className="increaseNoOfItems" onClick={handleIncrement}>+</button>
              </div>
            </div>

            <Button className='btn'>
              <NavLink to='/cart'>Add to Cart</NavLink>
            </Button>

          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
`;


const Container = styled.section`

  .container{
    max-width: 80rem;
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme.colors.greyBackground};
    margin: 3rem auto;
    justify-content: space-evenly;
    gap: 1.5rem;

    .productImage{
      /* padding: 1rem; */
      width: 100%;
      max-width: 35rem;
      /* outline: 1px solid yellow; */
    }
    
    .productData{
      max-width: 40rem;
      padding: 2rem 1rem;
      /* outline: 1px solid red; */
      border-left: 0.1rem solid grey;
    }
    
    p{
      margin: 1rem 0;
      letter-spacing: .05rem;
    }

    em{
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.lightWhite};
      letter-spacing: 0.1rem;
    }

    .id, .brand{
      font-weight: bold;
    }

    .discountedPrice{
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.baseColor};
      font-weight: 500;
    }

    .description{
      line-height: 1.4rem;
    }
    
    .productWarrenty{
      justify-content: space-between;
      gap: 0.8rem;

      .productWarrentyData{
        text-align: center;

        .warrentyIcon{
          font-size: 1.5rem;
        }
      }
    }

    .available{
      p,span{
        font-weight: bold;
      }
    }

    .noOfItemsToCart{
      justify-content: flex-start;

      .btns{
        justify-content: space-evenly;
        width: 7rem;
      }

      .btns > button{
        cursor: pointer;
        outline: none;
        border: none;
        background: transparent;
        font-size: 1.5rem;
      }
    }

    /* .btn{
      width: 20rem;
    } */
  }

  @media (max-width: 346px){
    .productWarrenty .productWarrentyData,.warrentyIcon{
      font-size: 0.9rem;
    }
  }
`;

export default SingleProduct

